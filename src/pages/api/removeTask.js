import harperRemoveTask from "../../utils/harperDB/harperRemoveTask";

export default async function handler(req, res) {
    const {id, token} = req.body;

    try {
        const {response, result} = await harperRemoveTask({id,token})

        if(response.status !== 200){
            throw new Error("Something went wrong")
        }

        return res.status(response.status).json({result})
    } catch (error) {
        console.log(error)
    }
}