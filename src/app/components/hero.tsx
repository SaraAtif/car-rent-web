import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSwapVertical } from "react-icons/io5";

const HeroPage = () => {
  return (
    <div className='bg-gray-100'>
        <div className='px-[40px] py-[32px]  md:flex md:justify-between'>
            <div className='bg-blue-300 w-[50%] mr-4 rounded-xl '>
                <div className='p-6'>
                    <h1 className='text-white flex-wrap font-semibold w-fit text-[32px]'>The Best Platform for Car Rental</h1>
                    <p className='text-white py-3 font-medium text-[14px] md:w-64 mt-3'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    <Link href={`/billing`}><button className="text-white bg-blue-500 px-9 py-3 mt-5 rounded-md text-lg">Rental Car</button></Link>
                </div>
                <div className='flex mt-3 justify-center'>
                    <Image src={`/car-1.png`} alt='car' width={250} height={250}></Image>
                </div>
            </div>
            <div className='bg-blue-500  w-[50%] ml-4 rounded-xl '>
                <div className='p-6'>
                    <h1 className='text-white flex-wrap font-semibold w-fit text-[32px]'>Easy way to rent a car at a low price</h1>
                    <p className='text-white py-3 font-medium text-[14px] md:w-64 mt-3'>Providing cheap car rental services and safe and comfortable facilities.</p>
                    <Link href={`/billing`}><button className="text-white bg-blue-300 px-9 py-3 mt-5 rounded-md text-lg">Rental Car</button></Link>
                </div>
                <div className='flex justify-center mb-4'>
                    <Image src={`/car-2.png`} alt='car' width={250} height={250}></Image>
                </div>
            </div>
        </div>
        <div className='px-[40px] py-[32px] flex flex-col justify-between lg:flex-row pt-2 rounded-xl '>
            <div className='bg-white w-[45%] py-4 px-4 pl-14'>
                <div className='flex gap-4'>
                    <input type="radio" checked />
                    <h1 className='font-samibold text-[18px]'>Pick - Up</h1>
                </div>
                <div className='flex justify-between mt-2 gap-4'>
                    <div>
                    <h1 className='font-bold'>Locations</h1>
                    <div className='flex justify-between items-center gap-3'>
                    <h2>Select your city</h2>
                    <RiArrowDropDownLine className='text-3xl text-gray-400'/>

                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>Date</h1>
                    <div className='flex justify-between items-center gap-3'>
                    <h2>Select your date</h2>
                    <RiArrowDropDownLine className='text-3xl text-gray-400'/>

                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>Time</h1>
                    <div className='flex justify-between items-center gap-3'>
                    <h2>Select your time</h2>
                    <RiArrowDropDownLine className='text-3xl text-gray-400' />

                    </div>
                </div>
                </div>

            </div>
            <div>
                <button className='w-[60px] h-[60px] rounded-[10px] bg-blue-600 m-6'><IoSwapVertical className='text-white m-3 text-3xl'/></button>
            </div>
            <div className='bg-white w-[45%] py-4 px-4 pl-14'>
                <div className='flex gap-4'>
                    <input type="radio" checked />
                    <h1 className='font-samibold text-[18px]'>Drop - Off</h1>
                </div>
                <div className='flex justify-between mt-2 gap-4'>
                    <div>
                    <h1 className='font-bold'>Locations</h1>
                    <div className='flex justify-between items-center gap-3'>
                    <h2>Select your city</h2>
                    <RiArrowDropDownLine className='text-3xl text-gray-400'/>

                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>Date</h1>
                    <div className='flex justify-between items-center gap-3'>
                    <h2>Select your date</h2>
                    <RiArrowDropDownLine className='text-3xl text-gray-400'/>

                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>Time</h1>
                    <div className='flex justify-between items-center gap-3'>
                    <h2>Select your time</h2>
                    <RiArrowDropDownLine className='text-3xl text-gray-400' />

                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )

}

export default HeroPage