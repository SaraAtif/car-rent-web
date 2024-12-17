import Image from 'next/image'
import React from 'react'
import d1 from "../assets/d1.png"
import d2 from "../assets/d2.png"
import d3 from "../assets/d3.png"
import d4 from "../assets/d4.png"
import d5 from "../assets/d5.png"
import d6 from "../assets/d6.png"
import setting from "../assets/setting.png"
import darkmode from "../assets/briefcase.png"
import circle from "../assets/info-circle.png"
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"
import logout from "../assets/logout.png"
import map from "../assets/Maps.png"
import car from "../../../public/view1.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import top5car from "../assets/top5car.png";
import recenttransection from "../assets/Recent Transaction.png"

const Dashboard = () => {
    return (
        <div className='flex bg-gray-200'>
            {/* side bar div */}

            <div className='w-[20%] p-4 hidden md:block bg-white'>
                <div className='m-4'>
                    <h1 className='text-gray-300 mb-6 font-semibold text-sm'>M A I N  M E N U</h1>
                    <ul className='my-3 space-y-5'>
                        <li className='text-white font-semibold flex items-center gap-3 pl-2  py-2 rounded-lg bg-blue-500'> <Image src={d1} alt='dashboard' width={20} height={20}></Image>Dashboard</li>
                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={d2} alt='dashboard' width={20} height={20}></Image>Car Rent</li>
                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={d3} alt='dashboard' width={20} height={20}></Image>Insight</li>
                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={d4} alt='dashboard' width={20} height={20}></Image>Reimburse</li>
                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={d5} alt='dashboard' width={20} height={20}></Image>Inbox</li>
                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={d6} alt='dashboard' width={20} height={20}></Image>Calender</li>


                    </ul>
                </div>

                <div className='m-4 pt-9'>
                    <h1 className='text-gray-300 mb-6 font-semibold text-sm'>P R E F E R E N C E S</h1>
                    <ul className='my-3 space-y-5'>
                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={setting} alt='dashboard' width={20} height={20}></Image>Settings</li>

                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={circle} alt='dashboard' width={20} height={20}></Image>Help & Center</li>
                        <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={darkmode} alt='dashboard' width={20} height={20}></Image>Dark Mode
                            <span className='flex gap-3 items-center ml-4'>
                                <Image className='w-5 h-5' src={sun} alt='sun' width={150} height={150}></Image>
                                <Image className='w-4 h-4' src={moon} alt='moon' width={450} height={450}></Image>
                            </span></li>


                    </ul>
                </div>
                {/* logout div */}
                <div className='mt-24 m-4'>
                    <li className='text-gray-400 font-medium flex items-center gap-3 pl-2  py-1 text-base'> <Image src={logout} alt='dashboard' width={20} height={20}></Image>Log Out</li>
                </div>

            </div>

            {/* dashboard section */}
            <div className='bg-[#F6F7F9] p-6 mx-auto lg:w-[80%] lg:flex gap-6 justify-between'>
                {/* detail rental section */}
                <div className='w-[50%] bg-white p-4 my-4 rounded-lg space-y-4'>
                    <div>
                        <h1 className='font-bold text-xl'>Details Rental</h1>
                    </div>
                    <div className='w-fit mx-auto mt-3'>
                        <Image src={map} alt='map' width={650} height={650}></Image>
                    </div>


                    <div className='flex  justify-between p-4'>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <Image className='w-32 h-20' src={car} alt='car' width={150} height={150}></Image>
                            </div>
                            <div className='ml-3' >
                                <div>
                                    <h1 className='font-bold text-[#1A202C] text-[24px]'>Nissan GT - R</h1>
                                    <p className='font-medium text-sm text-[#3D5278]'>Sport Car</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-medium text-sm text-[#3D5278]'>#9761</h1>
                        </div>
                    </div>

                    {/* pickup and dropoff div */}
                    
                        <div className=' px-4'>
                            <div className='flex gap-4'>
                                <input type="radio" checked />
                                <h1 className='font-semibold text-[16px]'>Pick - Up</h1>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div>
                                    <h1 className='font-bold'>Locations</h1>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-medium text-xs text-[#90A3BF] '>Kota Semarang</h2>
                                        <RiArrowDropDownLine className='text-3xl text-gray-400' />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Date</h1>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-medium text-xs text-[#90A3BF] '>20 July 2022</h2>
                                        <RiArrowDropDownLine className='text-3xl text-gray-400' />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Time</h1>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-medium text-xs text-[#90A3BF] '>07:00</h2>
                                        <RiArrowDropDownLine className='text-3xl text-gray-400' />

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=' px-4'>
                            <div className='flex gap-4'>
                                <input type="radio" checked />
                                <h1 className='font-semibold text-[16px]'>Drop - Off</h1>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div>
                                    <h1 className='font-bold'>Locations</h1>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-medium text-xs text-[#90A3BF] '>Kota Semarang</h2>
                                        <RiArrowDropDownLine className='text-3xl text-gray-400' />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Date</h1>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-medium text-xs text-[#90A3BF] '>21 July 2022</h2>
                                        <RiArrowDropDownLine className='text-3xl text-gray-400' />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Time</h1>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-medium text-xs text-[#90A3BF] '>01:00</h2>
                                        <RiArrowDropDownLine className='text-3xl text-gray-400' />

                                    </div>
                                </div>
                            </div>

                        </div>
                        


                        <div className='flex items-center pt-20 justify-between ml-2'>
                        <div>
                            <h1 className='font-bold text-xl'>Total Rental Price</h1>
                            <p className='font-medium text-sm text-gray-400'>Overall price and includes rental discount</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-[32px] leading-[40.32px]'>$80.00</h1>
                        </div>
                    </div>

                </div>
                {/* graph section */}
                <div  className='w-[50%] bg-white p-4  rounded-lg space-y-4 md:my-4'>
                    <div className='mx-auto md:mx-0 w-fit'>
                        <Image src={top5car} alt='loading' width={450} height={450}></Image>
                    </div>
                    <div className='mx-auto md:mx-0 w-fit md:mt-10'>
                    <Image src={recenttransection} alt='loading' width={450} height={450}></Image>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard