export default async function harperRemoveTask({ id, token }) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var raw = JSON.stringify({
    operation: "sql",
    sql: `delete from productivity_timer.tasks where id = "${id}"`,
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
    return {result, response}
  } catch (error) {
      console.log(error)
  }
}
