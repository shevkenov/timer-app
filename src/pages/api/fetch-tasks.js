import harperFetchTasks from "../../utils/harperDB/harperFetchTasks";

export default async function handler(req, res) {
    const {username, token} = req.body;

    try {
        if(!username){
            throw new Error("No user defined!")
        }
        
        const result = await harperFetchTasks({username, token});

        res.status(200).json({result})
    } catch (error) {
        res.status(401).json({error: error.message})
    }
    
}