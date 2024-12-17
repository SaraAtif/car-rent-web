import Image from 'next/image';
import Link from 'next/link'
import React from 'react';

const RecomendationCar = () => {
  return (
    <div className='bg-gray-100 px-[40px] py-[22px]'>
            <div className='px-5 '>
                <h1>Recomendation Car</h1>
            </div>
        <div className='flex justify-between mt-6 my-2 gap-4 overflow-hidden'>
            <div className='bg-white rounded-lg py-6 px-4'><Link href={`/detailsCar`}>
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
            <div className='bg-white rounded-lg py-6 px-4'>
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
            <div className='bg-white rounded-lg p-6'>
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
            <div className='bg-white rounded-lg p-6'>
            <Link href={`/detailsCar`}>
            <div className='p-4  w-fix shrink-0 bg-white rounded-[10px]'>
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
                <Image src={`/blackcar.png`} alt='car' width={250} height={250}></Image>
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
        </div>

        <div className='flex justify-between mt-7 my-2 gap-4 overflow-hidden'>
        <div className='bg-white rounded-lg py-6 px-4'>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>MG ZX Exclusice</h1>
                    <p className='text-sm text-gray-400'>Hatchback</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/redlike.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/car-1.png`} alt='car' width={250} height={250}></Image>
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
                    <h1 className='text-sm font-medium'>4People</h1>
                </div>
            </div>
            {/* for Rent */}
            <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                    <h1 className='font-bold text-xl '>$76.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'> 
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
            </div>
            </Link>
            </div>

            <div className='bg-white rounded-lg py-6 px-4'>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>New MG ZS</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/car-2.png`} alt='car' width={250} height={250}></Image>
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

            <div className='bg-white rounded-lg p-6'>
            <Link href={`/detailsCar`}>
            <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>MG ZX Excite</h1>
                    <p className='text-sm text-gray-400'>Hatchback</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/redlike.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/car-1.png`} alt='car' width={250} height={250}></Image>
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

            <div className='bg-white rounded-lg p-6'>
            <Link href={`/detailsCar`}>
            <div className='p-4  w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='text-xl font-bold text-black'>New MG ZS</h1>
                    <p className='text-sm text-gray-400'>SUV</p>
                </div>
                <div className='w-6 h-6  pt-2'>
                <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                </div>
                </div>
            </div>
            {/* car picture div */}
            <div className='flex justify-center my-10'>
                <Image src={`/car-2.png`} alt='car' width={250} height={250}></Image>
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



        </div>
        <div className='text-center my-11'>
            <Link href={`/category`}><button className='bg-blue-500 text-white py-3 px-6 rounded-lg  text-base font-semibold text-center'>Show more car</button> </Link>
        </div>

    
    </div>
  )
}

export default RecomendationCar