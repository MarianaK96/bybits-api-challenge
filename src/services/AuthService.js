export const login = async (username, password) => {
  const bodyData = { username: username, password: password };

  const response = await fetch(`https://api.bybits.co.uk/auth/token`, {
    method: "POST",
    headers: {
      environment: "mock",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  const data = await response.json();
  const accessToken = `auth=${data.access_token};`;
  document.cookie = accessToken;

  return response;
};
