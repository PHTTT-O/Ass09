"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"   // ✅ เพิ่ม

export default function Banner(){

  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg"
  ]

  const [index,setIndex] = useState(0)
  const router = useRouter()

  const { data: session } = useSession()   // ✅ เพิ่ม

  function handleBannerClick(){
    setIndex((prev)=>(prev+1)%covers.length)
  }

  function handleSelectVenue(){
    router.push("/venue")
  }

  return(
    <div className="w-full relative">

      <img
        src={covers[index]}
        alt="banner"
        className="w-full h-[500px] object-cover cursor-pointer"
        onClick={handleBannerClick}
      />

      <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-5xl font-bold">
        Venue Explorer
      </h1>

      {/* ✅ ตรงนี้แหละ test หา */}
      {session && (
        <p className="absolute top-10 left-10 text-white text-xl">
          {session.user?.name}
        </p>
      )}

      <button
        onClick={handleSelectVenue}
        className="absolute bottom-6 right-6 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200"
      >
        Select Venue
      </button>

    </div>
  )
}