import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function MyAccount({ name, image }: { name: string, image?: string | null }) {
  return (
    <Link href="/account" className="h-14 flex items-center justify-center aspect-square">
      <Avatar>
        <AvatarFallback>{`${name[0]}${name[1]}`}</AvatarFallback>
        {image && <AvatarImage src={image} alt={name} />}
      </Avatar>
    </Link>
  )
}
