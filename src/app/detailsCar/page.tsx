
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import redHeart from "../../../public/redlike.png"

const DetailCar = () => {
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

      {/* Detail Section */}
      <div className='bg-gray-100 w-[80%] p-6'>
        <div className='flex justify-center items-center gap-7'>
          <div className='gap-2  w-[50%] ml-4'>
            <div className='bg-blue-500  p-2 pr-5 rounded-xl '>
              <div className='p-6'>
                <h1 className='text-white flex-wrap font-semibold w-fit text-[32px]'>Sports car with the best design and acceleration</h1>
                <p className='text-white py-3 font-medium text-[16px] md:w-64 mt-3'>Safety and comfort while driving a
                  futuristic and elegant sports car</p>

              </div>
              <div className='flex justify-center mb-4'>
                <Image className='w-[380px]' src={`/car-2.png`} alt='car' width={250} height={250}></Image>
              </div>
            </div>
            <div className='flex mt-4 gap-5 justify-between items-center  '>
              <Image src={`/view1.png`} alt="Loading" width={250} height={250} ></Image>
              <Image src={`/view2.png`} alt="Loading" width={250} height={250} ></Image>
              <Image src={`/view3.png`} alt="Loading" width={250} height={250} ></Image>
            </div>

          </div>

          {/* Review section */}

          <div className='bg-white p-4 space-y-12 w-[50%]'>
            <div className='flex justify-between ' >
              <div>
                <h1 className='font-bold mb-3 text-[32px]'>Nissan GT - R</h1>
                <p><Image src={`/reviewstar.png`} alt='Loading' width={250} height={250}></Image></p>
              </div>
              <Image className='w-7 h-7 mr-4 mt-4' src={redHeart} alt='Like' width={250} height={250} ></Image>
            </div>


            <div className=' text-xl leading-9 text-gray-600'>
              <p>NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the race track.</p>
            </div>


            <div className='flex justify-between items-center'>
              <div>
                <p className='text-gray-400 text-xl gap-11 mt-4 flex '>Type Car <span className='text-black'>Sport</span></p>
                <p className='text-gray-400 text-xl gap-11 mt-4 flex '>Steering <span className='text-black'>Manual</span></p>
              </div>
              <div>
                <p className='text-gray-400 text-xl gap-11 mt-4 flex '>Capacity<span className='text-black'>2Person</span></p>
                <p className='text-gray-400 text-xl gap-11 mt-4 flex '>Gasoline <span className='text-black'>70L</span></p>
              </div>
            </div>

            <div className='flex justify-between items-center mt-13 ml-5'>
              <div>
                <h1 className='font-bold text-xl '>$80.00/ <span className='text-sm text-gray-400'>day</span></h1>
                <p className='text-sm mt-2 text-gray-400'><del>$100.00</del></p>
              </div>
              <div className='ml-4'>
                <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-md  text-base font-semibold text-center'>Rent Now</button></Link>
              </div>
            </div>


          </div>
        </div>

        {/* Review Section */}
        <div className='bg-white mt-7 ml-2 p-5'>
          <div className='flex gap-2'>
            <h1 className='font-semibold text-xl'>Reviews</h1>
            <button className='bg-blue-500 text-white ml-3 text-center rounded-[4px] px-5'>13</button>
          </div>
          <div className='mt-7'>
            <Image className='w-full' src={`/review1.png`} alt='review' width={550} height={550}></Image>
          </div>
          <div className='mt-7'>
            <Image className='w-full' src={`/review2.png`} alt='review' width={550} height={550}></Image>
          </div>
          <div className='justify-center items-center flex text-gray-400 mt-7'>
            <h1>Show All</h1>
            <RiArrowDropDownLine className='text-3xl text-gray-400' />
          </div>
        </div>

        {/* Recent car */}
        <div>
          <div className='flex justify-between items-center mt-5 font-semibold text-base '>
            <div className='px-5 gap-2 text-gray-400 '>
              <h1>Recent Car</h1>
            </div>
            <div className='text-blue-700 px-5 gap-2'>
              <Link href={`/billing`}>View All</Link>
            </div>
          </div>


          <div className='flex justify-between items-center mt-6 my-2 overflow-hidden '>
            <div className='bg-white rounded-lg p-4 px-8'>
              <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                  <div>
                    <h1 className='text-xl font-bold text-black'>Koenigsegg</h1>
                    <p className='text-sm text-gray-400'>Sport</p>
                  </div>
                  <div className='w-6 h-6  pt-2'>
                    <Image src={redHeart} alt='like' width={250} height={250}></Image>
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
                  <h1 className='text-sm font-medium'>9L</h1>
                </div>
                <div className='flex items-center gap-1'>
                  <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                  <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                  <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                  <h1 className='text-sm font-medium'>2People</h1>
                </div>
              </div>
              {/* for Rent */}
              <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                  <h1 className='font-bold text-xl '>$99.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'>
                  <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg p-4 px-8'>
              
                <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                  <div className='flex justify-between gap-16'>
                    <div>
                      <h1 className='text-xl font-bold text-black'>Nissan GT - R</h1>
                      <p className='text-sm text-gray-400'>Sport</p>
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
                    <h1 className='text-sm font-medium'>2People</h1>
                  </div>
                </div>
                {/* for Rent */}
                <div className='flex justify-between items-center mt-8 ml-5'>
                  <div>
                    <h1 className='font-bold text-xl '>$80.00/ <span className='text-sm text-gray-400'>day</span></h1>
                    <p className='text-sm mt-2 text-gray-400'><del>$100.00</del></p>
                  </div>
                  <div className='ml-4'>
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                  </div>
                </div>
              
            </div>
            <div className='bg-white rounded-lg p-4 px-8'>
              
                <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                  <div className='flex justify-between gap-16'>
                    <div>
                      <h1 className='text-xl font-bold text-black'>Rolls - Royce</h1>
                      <p className='text-sm text-gray-400'>Sedan</p>
                    </div>
                    <div className='w-6 h-6  pt-2'>
                      <Image src={`/redlike.png`} alt='like' width={250} height={250}></Image>
                    </div>
                  </div>
                </div>
                {/* car picture div */}
                <div className='flex justify-center my-10'>
                  <Image src={`/popcar.png`} alt='car' width={250} height={250}></Image>
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
                    <h1 className='font-bold text-xl '>$96.00/ <span className='text-sm text-gray-400'>day</span></h1>
                  </div>
                  <div className='ml-4'>
                    <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                  </div>
                </div>
            
            </div>
          </div>

        </div>

        {/* Recomendation car */}
        <div>
          <div className='flex justify-between items-center mt-5 font-semibold text-base '>
            <div className='px-5 gap-2 text-gray-400 '>
              <h1>Recomendation Car</h1>
            </div>
            <div className='text-blue-700 px-5 gap-2'>
              <Link href={`/billing`}>View All</Link>
            </div>
          </div>


          <div className='flex justify-between items-center mt-6 my-2 overflow-hidden '>
            <div className='bg-white rounded-lg p-4 px-8'>
              <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                  <div>
                    <h1 className='text-xl font-bold text-black'>Koenigsegg</h1>
                    <p className='text-sm text-gray-400'>Sport</p>
                  </div>
                  <div className='w-6 h-6 pt-2'>
                    <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
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
                  <h1 className='text-sm font-medium'>9L</h1>
                </div>
                <div className='flex items-center gap-1'>
                  <Image className='w-6 h-6' src={`/manual.png`} alt='wheel' width={250} height={250}></Image>
                  <h1 className='text-sm font-medium'>Manual</h1>
                </div>
                <div className='flex items-center gap-1'>
                  <Image className='w-6 h-6' src={`/users.png`} alt='users' width={250} height={250}></Image>
                  <h1 className='text-sm font-medium'>2People</h1>
                </div>
              </div>
              {/* for Rent */}
              <div className='flex justify-between items-center mt-8 ml-5'>
                <div>
                  <h1 className='font-bold text-xl '>$99.00/ <span className='text-sm text-gray-400'>day</span></h1>
                  <p className='text-sm mt-2 text-gray-400'><del>$80.00</del></p>
                </div>
                <div className='ml-4'>
                  <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg p-4 px-8'>

              <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                  <div>
                    <h1 className='text-xl font-bold text-black'>Nissan GT - R</h1>
                    <p className='text-sm text-gray-400'>Sport</p>
                  </div>
                  <div className='w-6 h-6  pt-2'>
                    <Image src={redHeart} alt='like' width={250} height={250}></Image>
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
                  <h1 className='text-sm font-medium'>2People</h1>
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
            </div>
            <div className='bg-white rounded-lg p-4 px-8'>

              <div className='p-4 w-fix shrink-0 bg-white rounded-[10px]'>
                <div className='flex justify-between gap-16'>
                  <div>
                    <h1 className='text-xl font-bold text-black'>Rolls - Royce</h1>
                    <p className='text-sm text-gray-400'>Sedan</p>
                  </div>
                  <div className='w-6 h-6  pt-2'>
                    <Image src={`/transparent heart.png`} alt='like' width={250} height={250}></Image>
                  </div>
                </div>
              </div>
              {/* car picture div */}
              <div className='flex justify-center my-10'>
                <Image src={`/popcar.png`} alt='car' width={250} height={250}></Image>
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
                  <h1 className='font-bold text-xl '>$96.00/ <span className='text-sm text-gray-400'>day</span></h1>
                </div>
                <div className='ml-4'>
                  <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-sm  text-base font-semibold text-center'>Rent Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailCar