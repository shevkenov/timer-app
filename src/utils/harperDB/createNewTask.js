export default async function createNewTask({username, newTask, token}) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + token);

  var raw = JSON.stringify({
    operation: "sql",
    sql: `INSERT INTO productivity_timer.tasks (task_name, time_in_seconds, username) VALUE ("${newTask}", 0, "${username}")`,
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
          throw new Error("Something went wrong in the server!");
      }

      return response.json();
  } catch (error) {
      console.log(error)
  }
}
