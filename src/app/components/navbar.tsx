import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu"
import { IoHeart } from "react-icons/io5";
import { IoMdNotifications ,IoMdSettings } from "react-icons/io";
import Link from "next/link";


export default function Navbar(){
    return(
    <nav className="p-0 m-0  border-2 solid  flex justify-between items-center">
        
            <div className="  flex items-center justify-center py-10  pl-14">
                <div>
                    <Image className="text-2xl leading-[48px]" src={`/Logo.png`} alt="logo" width={140} height={150}></Image>
                </div>
                <div className=" border-[1px] solid rounded-3xl flex justify-center items-center p-2 ml-14">
                <CiSearch className="font-semibold mx-4"/>
                
                    <input className=" mr-14" type="text" placeholder="Search something here"/>
                    <LuSettings2 className="ml-9 mr-4" />
                    
                </div>
            </div>
            <div className="flex gap-5  mr-4">
            <IoHeart className="w-11 h-11 text-gray-400 " />
            <IoMdNotifications className="w-11 h-11  text-gray-400"/>
            <IoMdSettings className="w-11 h-11  text-gray-400 "/>
            <Link href={'/dashboard'}><Image className="w-11 h-11" src={`/Profil (1).png`} alt="profile" width={300} height={300}></Image></Link>
            </div>
    
    </nav>
    )
}