import { UserButton } from "@clerk/nextjs";

 

 export default function Home(){
  return (
    <>
     <main>
      <div className="flex mt-10 items-center justify-center">
        <UserButton/>
      </div>
     </main>
    </>
  )
 }