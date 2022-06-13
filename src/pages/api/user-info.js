import { harperGetUserInfo } from "../../utils/harperDB/harperGetUserInfo";

export default async function handler(req, res) {
    const token = req.body;
  
    try {
      if(!token){
        throw new Error("No access token!");
      }
  
      const {response, result} = await harperGetUserInfo(token);
      if(response.status !== 200) {
        throw new Error(result.error);
      }

      res.status(response.status).json({ user: result});
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }