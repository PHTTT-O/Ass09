import Link from "next/link"

export default function TopMenuItem({title, pageRef}:{title:string,pageRef:string}) {
  return (
    <Link href={pageRef}>
      <div className="px-4 py-2 text-white cursor-pointer">
        {title}
      </div>
    </Link>
  )
}