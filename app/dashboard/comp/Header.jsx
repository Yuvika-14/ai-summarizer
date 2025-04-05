"use client"
import React,{useEffect} from 'react'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
const Header = () => {
    const path = usePathname();
    useEffect(()=>{
        console.log(path);
    },[])
  return (

    <div className = 'flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src= {'/icon.svg'} width = {60} height = {60} alt = ""/>
      <ul className = 'hidden md:flex gap-6'>
      <li className={`hover:text-purple-800 hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-purple-800 font-bold'}`}>Dashboard</li>
    
           
        < li className = {`hover:text-purple-800 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/demo' && 'text-purple-800 font-bold'}`} >Demo</  li >
        < li className = {`hover:text-purple-800 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-purple-800 font-bold'}`}>Questions</ li >
        < li className = {`hover:text-purple-800 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/work' && 'text-purple-800 font-bold'}`} >How it Works?</ li >
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header
