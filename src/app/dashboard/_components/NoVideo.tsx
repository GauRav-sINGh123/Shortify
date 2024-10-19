import Image from "next/image"
function NoVideos() {
  return (
    <div className='h-[500px] w-[80%]  ml-12 sm:ml-36 flex flex-col items-center justify-center p-3'>
      <h2 className="text-xl font-bold font-gray-500 mt-10">No video Found</h2>
      <Image src='/NoVideoFound.jpg' width={350} height={350} className="mb-20" alt='No video found'/>
      
    </div>
  )
}

export default NoVideos