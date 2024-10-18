'use client'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from "next/navigation";
export default function LoginButton() {
    const {user}=useUser()
    const path=usePathname()
    return(
        <>
        {
            !user?(
              < Link href={'/dashboard'}> <Button className="px-6 py-2 bg-black text-white hover:bg-black rounded-xl">Login</Button></Link>
            ):(
               <div className="flex gap-2">
                {
                    path==='/dashboard'? null:<Link href='/dashboard'><Button className="px-6 py-2 rounded-xl bg-red-400 hover:bg-red-500 text-white">Dashboard</Button></Link>
                }
                 <UserButton />
               </div>
            )
        }
        </>
    )
}