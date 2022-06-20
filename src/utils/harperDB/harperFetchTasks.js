export default async function harperFetchTasks({username, token}) {
  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var raw = JSON.stringify({
    "operation": "sql",
    "sql": `SELECT * FROM productivity_timer.tasks WHERE username="${username}" order by __createdtime__ desc`,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  
  try {
      const response = await fetch(process.env.DB_URL, requestOptions);
      
      if(response.status !== 200){
        throw new Error("No authorization!")
      }
      const result = await response.json();

      return result
  } catch (error) {
      console.error(error.message)
  }
}
