import axios from "axios";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
  console.log(password, hashedPassword,"************************");
  
  return bcrypt.compare(password, hashedPassword);
};


export const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '7d' });
};

async function callApi(url, filterdata,method) {
  console.log(url, filterdata,method,"pppppppppppp");
  
  try {
    const response = await axios[method](url, filterdata);
    console.log(response.data, '**************************');
    return response.data
  } catch (error) {
    console.error(error);
  }
}



export {
  callApi
}