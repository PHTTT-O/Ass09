const fetch = require("node-fetch");
export default async function getUserProfile(token: string) {
  const res = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/me",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return await res.json();
}