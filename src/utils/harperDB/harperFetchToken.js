export const harperFetchToken = async ({ username, password }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Basic ${process.env.HARPER_PASSORD}`);

  var raw = JSON.stringify({
    operation: "create_authentication_tokens",
    username,
    password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
      const response = await fetch(process.env.DB_URL, requestOptions);
      const {operation_token, refresh_token} = await response.json();
      return {operation_token, refresh_token};
  } catch (error) {
      console.log("error", error)
  }
};
