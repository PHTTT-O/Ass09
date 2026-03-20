const fetch = require("node-fetch");

export default async function userLogIn(
  userEmail: string,
  userPassword: string
) {
  const res = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword
      })
    }
  );

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data = await res.json();

  return {
    token: data.token,
    ...(data.data || data)   // 🔥 fix จริง
  };
}