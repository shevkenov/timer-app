import createNewTask from "../../utils/harperDB/createNewTask";

export default async function handler(req, res) {
    const {username, newTask, token} = req.body;

    try {
        if(!username){
            throw new Error("No authorization!")
        }

        const result = await createNewTask({username, newTask, token})

        res.status(200).json({result})
    } catch (error) {
        res.status(401).json({error})
    }
}