const postFormData = async({method, url, data}) => {
    const options = {
        method,
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, method && options);
    return response.json();
};

export default postFormData