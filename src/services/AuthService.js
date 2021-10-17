import { getPolicy } from "./PolicyService";

export const login = async (username, password) => {
  const requestData = { username: username, password: password };

  const response = await fetch(`https://api.bybits.co.uk/auth/token`, {
    method: "POST",
    headers: {
      environment: "mock",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      const accessToken = data.access_token;
      document.cookie = accessToken;
      const cookie = document.cookie;
      getPolicy(cookie);
      return cookie;
    });

  return response;
};

//can access cookies anywhere
//in policy API call read cookie in authorization header such as Authorization: `Bearer ${authToken}`

// try {
//     const requestData = { username: username, password: password };

//     const response = await fetch(`https://api.bybits.co.uk/auth/token`, {
//       method: "POST",
//       headers: {
//         environment: "moc",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestData),
//     });

//     if (response.status !== 200) throw response.status;

//     return response;
//   } catch (error) {
//     console.log("error : ", error);
//     return error;
//   }
