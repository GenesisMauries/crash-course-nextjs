"use client"
import Link from 'next/link'
// import { usePathname } from 'next/navigation'

export const Navigation = () => {
    // const pathname = usePathname();
  return (
    <nav>
        <Link href={"/"}>Home </Link>
        <Link href={"/about"}>About </Link>
        <Link href={"/products/1"}>Product 1 </Link>
    </nav>
  )
}
