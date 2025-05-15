import { s3 } from "../config/aws.config.js";
import dotenv from "dotenv";
import * as utils from "../utils.js";
dotenv.config();

const upload_file = async (req, res) => {
    try {
        let file = await req.file();
        let file_name = file.filename;

        let file_ext = file_name.split(".")[1];
        if (!utils.extensions.includes(file_ext)) {
            return res.status(400).send({ message: "unsupported file extension" });
        }
        console.log(file_ext, "file_ext");

        let upload = await s3
            .upload({
                Bucket: process.env.bucket_name,
                Key: file_name,
                Body: file.file,
            })
            .promise();
        let link = await s3.getSignedUrl("getObject", {
            Bucket: process.env.bucket_name,
            Key: file_name,
        });

        return res.send(link);
    } catch (error) {
        console.log(error);
    }
};

const create_multipart_upload = async (req, res) => {
    try {
        let file_name = req.query.filename;
        let file_ext = file_name.split(".")[1];
        if (!utils.extensions.includes(file_ext)) {
            return res.status(400).send({ message: "unsupported file extension" });
        }
        let upload = await s3
            .createMultipartUpload({
                Bucket: process.env.bucket_name,
                Key: file_name,
            })
            .promise();

        return res.send(upload.UploadId);
    } catch (err) {
        console.log(err);
    }
};

const upload_chunk = async (req, res) => {
    try {
        let file = await req.file();
        let file_name = file.filename;
        let upload_id = req.query.upload_id;

        const chunkSize = 10 * 1024 * 1024; // 10 MB
        let partNumber = 1;
        let partsList = [];

        const bufferChunks = [];
        let currentSize = 0;

        console.log(file,"file");
        
        for await (const chunk of file.file) {
            bufferChunks.push(chunk);
            currentSize += chunk.length;

            // Upload part when enough size is collected
            if (currentSize >= chunkSize) {
                const partBuffer = Buffer.concat(bufferChunks);
                bufferChunks.length = 0;
                currentSize = 0;

                const uploadPart = await s3
                    .uploadPart({
                        Bucket: process.env.bucket_name,
                        Key: file_name,
                        UploadId: upload_id,
                        PartNumber: partNumber,
                        Body: partBuffer,
                    })
                    .promise();

                partsList.push({ ETag: uploadPart.ETag, PartNumber: partNumber });
                console.log({ ETag: uploadPart.ETag, PartNumber: partNumber })

                partNumber++;
            }
        }

        // Upload last part if there is remaining buffer
        if (bufferChunks.length > 0) {
            const lastBuffer = Buffer.concat(bufferChunks);
            const uploadPart = await s3
                .uploadPart({
                    Bucket: process.env.bucket_name,
                    Key: file_name,
                    UploadId: upload_id,
                    PartNumber: partNumber,
                    Body: lastBuffer,
                })
                .promise();
            partsList.push({ ETag: uploadPart.ETag, PartNumber: partNumber });
        }

        return res.send(partsList);
    } catch (error) {
        console.log(error);
        
     }
};

const complete_upload = async (req,res) => {
    try {
        let upload_id = req.query.upload_id;
        let file_name = req.query.filename
        let parts = req.body.parts;
        let complete = await s3.completeMultipartUpload({
                    Bucket: process.env.bucket_name,
                    Key: file_name,
                    UploadId: upload_id,
                    MultipartUpload : {
                        Parts : parts
                    }
        }).promise()

        let link = await s3.getSignedUrl("getObject", {
            Bucket: process.env.bucket_name,
            Key: file_name,
        });

        return res.send(link)

    } catch (error) {
        console.log(error)
    }
}

export { upload_file, create_multipart_upload, upload_chunk , complete_upload};
