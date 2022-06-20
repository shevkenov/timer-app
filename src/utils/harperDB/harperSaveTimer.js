import postFormData from "../formData";

export default async function harperSaveTimer({seconds, taskId, token}) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var raw = JSON.stringify({
    operation: "sql",
    sql: `UPDATE productivity_timer.tasks SET time_in_seconds = '${seconds}' WHERE id = '${taskId}'`,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
      const response = await fetch(process.env.DB_URL, requestOptions);
      const result = await response.json();

      return {response, result};
  } catch (error) {
      console.log("error", error);
  }
    
    
}
