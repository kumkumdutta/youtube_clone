import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
export const authenticate = async (req, reply) => {
    try {
        
        let secret = process.env.SECRET_KEY;
        console.log(req.headers.authorization,"******************");
        
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token,"hgjghjdj");
        if (!token) {
            return reply.status(401).send({ error: "Unauthorized" });
        }

        const decoded = jwt.verify(token,secret);
        console.log(decoded,"decodeddecoded");
        req.user = decoded;

     
        
    } catch (error) {
        console.log(error);
        
        return reply.status(401).send({ error: "Invalid token" });
    }
};
