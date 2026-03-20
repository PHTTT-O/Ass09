"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Sign In</h1>

      <input onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() =>
          signIn("credentials", {
            email,
            password,
            callbackUrl: "/"
          })
        }
      >
        Login
      </button>
    </div>
  );
}