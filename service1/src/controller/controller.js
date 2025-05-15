import * as helper from '../utils/helper.js';
import * as Function from '../utils/service2.functions.js';
import { collection } from '../utils/constant.value.js';
const findUser = async (req,res)=>{
    try {
        let response = await helper.getdata({Collection:'User',filterdata:req.body})

        
        return res.status(200).send({status:true,data:response});
    } catch (error) {
        console.log(error);
        return res.status(500).send({status:false,data:error});
    }
}

const registerUser =  async (req, res) => {
   try {
    const obj = req.body;
    let password = req.body.password

    const existingUser = await Function.getdata({ 
        Collection : collection.user,
        filterdata : {email: obj.email }
    });

    console.log(existingUser,"i am user");
    
    
    if (existingUser && existingUser.data.length) return res.status(400).send({ error: "User already exists" });

    const hashedPassword = await helper.hashPassword(password);
    obj.password =hashedPassword 
    const newUser = await Function.make_db_entry({ 
        Collection : collection.user,
        document : obj
        });


    return  res.status(201).send({ message: "User registered", user: newUser });
   } catch (error) {
    console.log(error)
    return res.status(500).send({status:false,data:error});
   }
}

const login = async (req,res)=>{
   
        const { email, password } = req.body;
        console.log(password,"passwrddd");
        
        const user = await Function.getdata({ Collection:collection.user,filterdata:{email} });
   
        

        if (!user || !(await helper.comparePassword(password, user.data[0].password))) {
            return res.status(401).send({ error: "Invalid credentials" });
        }

        const token = helper.generateToken(user.data[0]);
        return res.status(200).send({ token , username:user.data[0].username, email:user.data[0].email });
   
}
export {
    findUser,
    registerUser,
    login
}