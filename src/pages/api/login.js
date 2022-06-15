import { harperFetchToken } from "../../utils/harperDB/harperFetchToken";
import { harperGetUserInfo } from "../../utils/harperDB/harperGetUserInfo";

export default async function handler(req, res) {
    const {username, password} = req.body;

    
    try {
        if(!username || !password){
            throw new Error('Username and password must be provided!')
        }

        const {operation_token: token} = await harperFetchToken({username, password});
        if(!token){
            throw new Error('Invalid credentials!')
        }

        const {result, response} = await harperGetUserInfo(token);
        
        if(response.status !== 200){
            throw new Error('Something went wrong')
        }

        res.status(response.status).json({token, user: result})
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}