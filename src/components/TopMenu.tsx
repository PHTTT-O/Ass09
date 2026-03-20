"use client";

import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function TopMenu() {

  const { data: session } = useSession();

  return (
    <div className="w-full h-full bg-blue-900 flex items-center justify-between">

      {/* LEFT: Sign-In / Sign-Out */}
      <div className="ml-4 text-white">
        {!session ? (
          <Link href="/api/auth/signin">Sign-In</Link>
        ) : (
          <button onClick={() => signOut()}>
            Sign-Out
          </button>
        )}
      </div>
      <div className="flex w-80 h-full items-center justify-end ">
        {/* RIGHT MENU */}
      <div className="flex gap-4 bg-black h-full items-center pr-4">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
      {/* LOGO */}
      <div className="flex items-center gap-3 w-16 bg-white h-full justify-center">
        <Image
          src="/next.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      </div>
      

      

    </div>
  );
}