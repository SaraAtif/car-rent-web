import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSwapVertical } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';



const CategoryPage = () => {
  return (
    <div className='flex'>
      {/* Sider section */}
      <div className='w-[20%] p-4 hidden md:block'>
        <div className='m-8'>
          <h1 className='text-gray-400 mb-6 font-semibold text-sm'>TYPE</h1>
          <ul className='my-4 space-y-5'>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" checked />Sport <span className='text-gray-400'>(10)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" checked />SUV <span className='text-gray-400'>(12)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" />MPV <span className='text-gray-400'>(16)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" />Sedan <span className='text-gray-400'>(20)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" />Coupe <span className='text-gray-400'>(14)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" />Hatchback <span className='text-gray-400'>(14)</span></li>
          </ul>
        </div>

        <div className='m-8 mt-10'>
          <h1 className='text-gray-400 mb-6 font-semibold text-sm'>TYPE</h1>
          <ul className='my-4 space-y-5'>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" checked />2Person <span className='text-gray-400'>(10)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" />4Person<span className='text-gray-400'>(14)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" />6Person<span className='text-gray-400'>(12)</span></li>
            <li className=' font-semibold text-justify text-xl text-gray-900'><input className='w-4 h-4 mr-3 rounded-3xl' type="checkbox" />8 or More<span className='text-gray-400'>(16)</span></li>
          </ul>
        </div>

        <div className='m-8 mt-10'>
          <h1 className='text-gray-400 mb-4 font-semibold text-sm'>PRICE</h1>
          <input type="range" className='w-full mt-3' />
          <h1 className='text-gray-600 font-semibold text-xl text-justify'>Max. $100.00</h1>
        </div>
      </div>

      {/* Category Section */}
      <div className='bg-gray-100 mx-auto py-6 w-[80%]'>
        {/* pickUp and Drop off */}
        <div className='px-[40px] py-[32px] flex flex-col justify-between lg:flex-row pt-2 rounded-xl '>
          <div className='bg-white w-[60%] py-4 px-4 pl-6'>
            <div className='flex gap-4'>
              <input type="radio" checked />
              <h1 className='font-samibold text-[18px]'>Pick - Up</h1>
            </div>
            <div className='flex justify-between mt-2 gap-4'>
              <div>
                <h1 className='font-bold mb-1'>Locations</h1>
                <div className='flex justify-between items-center text-gray-500 text-sm gap-2 '>
                  <h2>Select your city</h2>
                  <RiArrowDropDownLine className='text-2xl text-gray-400' />

                </div>
              </div>
              <div>
                <h1 className='font-bold mb-1'>Date</h1>
                <div className='flex justify-between items-center text-gray-500 text-sm gap-2'>
                  <h2>Select your date</h2>
                  <RiArrowDropDownLine className='text-2xl text-gray-400' />

                </div>
              </div>
              <div>
                <h1 className='font-bold mb-1'>Time</h1>
                <div className='flex justify-between items-center text-gray-500 text-sm gap-2'>
                  <h2>Select your time</h2>
                  <RiArrowDropDownLine className='text-2xl text-gray-400' />

                </div>
              </div>
            </div>

          </div>
          <div>
            <button className='w-fit h-fit rounded-[10px] bg-blue-600 mt-7'><IoSwapVertical className='text-white m-3 text-3xl' /></button>
          </div>
          <div className='bg-white w-[60%] py-4 px-4 pl-6'>
            <div className='flex gap-4'>
              <input type="radio" checked />
              <h1 className='font-samibold text-[18px]'>Drop - Off</h1>
            </div>
            <div className='flex justify-between mt-2 gap-4'>
              <div>
                <h1 className='font-bold mb-1'>Locations</h1>
                <div className='flex justify-between items-center text-gray-500 text-sm gap-2'>
                  <h2>Select your city</h2>
                  <RiArrowDropDownLine className='text-2xl text-gray-400' />

                </div>
              </div>
              <div>
                <h1 className='font-bold mb-1'>Date</h1>
                <div className='flex justify-between items-center text-gray-500 text-sm gap-2'>
                  <h2>Select your date</h2>
                  <RiArrowDropDownLine className='text-2xl text-gray-400' />

                </div>
              </div>
              <div>
                <h1 className='font-bold mb-1'>Time</h1>
                <div className='flex justify-between items-center text-gray-500 text-sm gap-2'>
                  <h2>Select your time</h2>
                  <RiArrowDropDownLine className='text-2xl text-gray-400' />

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Car Section */}
        <div className='mx-9'>
          {/* 1st div for Car */}
        <div className='flex  items-center  mt-1 my-2 gap-4 overflow-hidden'>
            <div className='bg-white rounded-lg  py-6 px-8'><Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>All New Rush</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/bluecar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>70L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$72.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link></div>
            <div className='bg-white rounded-lg py-6 px-8'>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>CR  - V</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/redlike.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/recomcar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>80L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$80.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link>
            </div>
            <div className='bg-white rounded-lg py-6 px-8 '>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>All New Terios</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/bluecar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>90L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$74.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link>
            </div>
           
        </div>
        {/* 2nd div for Car */}
        <div className='flex  items-center  mt-6 my-2 gap-4 overflow-hidden'>
            <div className='bg-white rounded-lg  py-6 px-8'><Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>All New Rush</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/bluecar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>70L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$72.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link></div>
            <div className='bg-white rounded-lg py-6 px-8'>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>CR  - V</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/redlike.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/recomcar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>80L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$80.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link>
            </div>
            <div className='bg-white rounded-lg py-6 px-8 '>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>All New Terios</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/bluecar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>90L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$74.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link>
            </div>
           
        </div>
        {/* 3rd div for Car */}
        <div className='flex  items-center  mt-6 my-2 gap-4 overflow-hidden'>
            <div className='bg-white rounded-lg  py-6 px-8'><Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>All New Rush</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/bluecar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>70L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$72.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link></div>
            <div className='bg-white rounded-lg py-6 px-8'>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>CR  - V</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/redlike.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/recomcar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>80L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$80.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link>
            </div>
            <div className='bg-white rounded-lg py-6 px-8 '>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>All New Terios</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/bluecar.png`} alt='car' width={250} height={250}></Image>
            </div>
            {/* for specification */}
            <div className='flex justify-between text-gray-400 mt-14 ml-5'>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/fuel.png`} alt='fuel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>90L</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                    <h1 className='text-sm font-medium'>6People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$74.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link>
            </div>
           
        </div>
        </div>

        {/* for bottom button */}
        <div className='flex justify-between items-center w-full md:w-[50%] md:ml-auto  text-center  mx-14 my-11'>
            <button className='bg-blue-500 text-white py-3 px-6 rounded-lg  text-base font-semibold'>Show more car</button>
            <h1 className='text-gray-300 font-medium text-sm'>120 Car</h1>
        </div>

      </div>
    </div>

  )
}

export default CategoryPage