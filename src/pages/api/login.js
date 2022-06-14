import { harperFetchToken } from "../../utils/harperDB/harperFetchToken";

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

        res.status(200).json({token})
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}