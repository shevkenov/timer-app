import { createUser } from "../../utils/harperDB/createNewUser";

export default async function handler(req, res) {
  const {username, password, repeatPassword} = req.body;

  try {
    if(!username || !password || !repeatPassword){
      throw new Error("All fields are reuqired!");
    }
    
    if(password !== repeatPassword){
      throw new Error("Both passwords do not match");
    }

    const {response, result} = await createUser({method: req.method, data: {username, password}});
    if(response.status !== 200) {
      throw new Error(result.error);
    }
    
    //const { operation_token, refresh_token } = await harperFetchToken({username, password});
    //console.log(token)

    res.status(response.status).json({ data: result });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
