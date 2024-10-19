'use client'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

import NoVideos from './_components/NoVideo';

function Dashboard() {
  const [videos,setVideos]=useState([]);
  return (
    <div className='text-black mt-20 flex flex-col justify-center items-center gap-6 ml-24 md:ml-0'>
      <h1 className='text-3xl font-semibold'>Dashboard</h1>
      <div>
      <Link href={'/dashboard/create'}>
      <Button className='bg-black rounded-xl text-white px-4 hover:bg-black'>Create an short</Button>
      </Link>
      </div>
      <div className="w-full">
        {
          videos?.length===0 && <div>
            <NoVideos/>
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard