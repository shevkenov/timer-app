export const createUser = async({method, data}) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", process.env.HARPER_PASSORD);

    const raw = JSON.stringify({
        ...data,
        role: "user",
        active: true,
        operation: "add_user"
    })

    const options = {
        headers: myHeaders, 
        method, body: raw
    }
    try {

        const response = await fetch(process.env.DB_URL, options);
        const result = await response.json();

        return {result, response}
    } catch (error) {  
        console.log(error)
    }
}
