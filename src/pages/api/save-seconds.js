import harperSaveTimer from "../../utils/harperDB/harperSaveTimer";

export default async function handler(req, res) {
    const {taskId, token, seconds} = req.body;

    try {
        const {response, result} = await harperSaveTimer({taskId, token, seconds});
        
        if(response.status !== 200){
            throw new Error("Something went wrong")
        }
        
        res.status(response.status).json({result});
    } catch (error) {
        res.status(401).json({error})
    }
}