import Image from 'next/image';
import React from 'react'
import visa from '../../../public/Visa.png'
import Link from 'next/link';
import securitysafe from "../../../public/securitysafe.png";
import paypal from "../../../public/PayPal.png";
import bitcoin from "../../../public/Bitcoin.png";
import car from "../../../public/view1.png";

const BillingPage = () => {
    return (
        <div className='bg-gray-300 p-2 px-4 flex gap-3'>
            {/* Billing info */}
            <div className=' w-[65%] pl-2 order-2 lg:order-1'>
                <div className='w-full bg-white p-2 px-5 rounded-lg mt-3 lg;mt-0 mx-auto lg:mx-0'>
                    <div>
                        <h1 className='font-bold'>Billing Info</h1>
                    </div>
                    <div className='flex justify-between text-gray-300 text-sm font-medium'>
                        <h1 className=''>Please enter your billing info</h1>
                        <h1>Step 1 of 4</h1>
                    </div>

                    <form action="post" className='my-3'>
                        <div className='md:flex justify-between gap-x-5 '>
                            <div className='md:w-[50%]'>
                                <h1 className='font-semibold text-base mb-2'>Name</h1>
                                <input type="text" placeholder='Your name' className='w-full p-3 rounded-lg mt-1 bg-[#F6F7F9]' />

                            </div>
                            <div className='md:w-[50%]'>
                                <h1 className='font-semibold text-base mb-2'>Phone Number</h1>
                                <input type="text" placeholder='Phone number' className='w-full p-3 rounded-lg mt-1 bg-[#F6F7F9]' />
                            </div>
                        </div>

                        <div className='md:flex justify-between gap-x-5 '>
                            <div className='md:w-[50%] mt-2'>
                                <h1 className='font-semibold text-base mb-2'>Address</h1>
                                <input type="text" placeholder='Address' className='w-full p-3 rounded-lg mt-1 bg-[#F6F7F9]' />

                            </div>
                            <div className='md:w-[50%] mt-2'>
                                <h1 className='font-semibold text-base mb-2'>Town / City</h1>
                                <input type="text" placeholder='Town or city' className='w-full p-3 rounded-lg mt-1 bg-[#F6F7F9]' />
                            </div>
                        </div>
                    </form>
                </div>


                {/* Rental info div */}
                <div className='w-full bg-white p-2 px-5 rounded-lg mt-3 lg;mt-0 mx-auto lg:mx-0'>
                    <div>
                        <h1 className='font-bold'>Rental Info</h1>
                    </div>
                    <div className='flex justify-between text-gray-400 text-sm font-medium'>
                        <h1 className=''>Please select your rental date</h1>
                        <h1>Step 2 of 4</h1>
                    </div>

                    <form action="post" className='my-3'>

                        <div>
                            <div className=' py-4 px-4'>
                                <div className='flex gap-4'>
                                    <input type="radio" checked />
                                    <h1 className='font-semibold text-[16px]'>Pick - Up</h1>
                                </div>
                                <div className='md:flex justify-between gap-x-5 '>
                                    <div className='md:w-[50%] mt-2'>
                                        <h1 className='font-semibold text-base mb-2'>Locations</h1>
                                        <input type="text" placeholder='Select your city' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                                    </div>

                                    <div className='md:w-[50%] mt-2'>
                                        <h1 className='font-semibold text-base mb-2'>Date</h1>
                                        <input type="text" placeholder='Select your date' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                                    </div>
                                </div>
                                <div>
                                    <div className='md:w-[50%] mt-2'>
                                        <h1 className='font-semibold text-base mb-2'>Time</h1>
                                        <input type="text" placeholder='Select your time' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div>
                            <div className=' py-4 px-4'>
                                <div className='flex gap-4'>
                                    <input type="radio" checked />
                                    <h1 className='font-semibold text-[16px]'>Drop - Off</h1>
                                </div>
                                <div className='md:flex justify-between gap-x-5 '>
                                    <div className='md:w-[50%] mt-2'>
                                        <h1 className='font-semibold text-base mb-2'>Locations</h1>
                                        <input type="text" placeholder='Select your city' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                                    </div>

                                    <div className='md:w-[50%] mt-2'>
                                        <h1 className='font-semibold text-base mb-2'>Date</h1>
                                        <input type="text" placeholder='Select your date' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                                    </div>
                                </div>
                                <div>
                                    <div className='md:w-[50%] mt-2'>
                                        <h1 className='font-semibold text-base mb-2'>Time</h1>
                                        <input type="text" placeholder='Select your time' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>

                </div>

                {/* Payment Method div */}
                <div className='w-full bg-white p-2 px-5 rounded-lg mt-3 lg;mt-0 mx-auto lg:mx-0'>
                    <div>
                        <h1 className='font-bold'>Payment Method</h1>
                    </div>
                    <div className='flex justify-between text-gray-400 text-sm font-medium'>
                        <h1 className=''>Please enter your payment method</h1>
                        <h1>Step 3 of 4</h1>
                    </div>

                    <form action="post" className='my-3 rounded-lg bg-gray-100 p-3'>
                        <div className='flex justify-between items-center'>
                            <div className='gap-2 flex'>
                                <input type="radio" checked />
                                <h1 className='font-semibold text-base'>Credit Card</h1>
                            </div>
                            <div>
                                <Image src={visa} alt='visa' width={100} height={100}></Image>
                            </div>
                        </div>

                        <div className='md:flex justify-between gap-x-5 '>
                            <div className='md:w-[50%] mt-2'>
                                <h1 className='font-semibold text-base mb-2'>Card Number</h1>
                                <input type="text" placeholder='Card number' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                            </div>

                            <div className='md:w-[50%] mt-2'>
                                <h1 className='font-semibold text-base mb-2'>Expration Date</h1>
                                <input type="date" className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                            </div>
                        </div>

                        <div className='md:flex justify-between gap-x-5 '>
                            <div className='md:w-[50%] mt-2'>
                                <h1 className='font-semibold text-base mb-2'>Card Holder</h1>
                                <input type="text" placeholder='Card holder' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                            </div>

                            <div className='md:w-[50%] mt-2'>
                                <h1 className='font-semibold text-base mb-2'>CVC </h1>
                                <input type="number" placeholder='CVC' className='w-full p-3 rounded-lg mt-1 bg-gray-100' />
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex items-center gap-4 text-lg '><input type="radio" className='w-4 h-4' />
                            <h1 className='font-semibold text-[16px]'>PayPal</h1>
                        </div>
                        <div>
                            <Image src={paypal} alt='paypal' width={100} height={100}></Image>
                        </div>
                    </div>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex items-center gap-4'><input type="radio" className='w-4 h-4' />
                            <h1 className='font-semibold text-[16px]'>Bitcoin</h1>
                        </div>
                        <div>
                            <Image src={bitcoin} alt='bitcoin' width={100} height={100}></Image>
                        </div>
                    </div>

                </div>

                {/* confirmation div */}
                <div className='w-full bg-white p-2 mx-auto px-5 rounded-lg mt-3 lg;mt-0  lg:mx-0'>
                    <div>
                        <h1 className='font-bold'>Confirmation</h1>
                    </div>
                    <div className='flex justify-between text-gray-400 text-sm font-medium'>
                        <h1 className=''>We are getting to the end. Just few clicks and your rental is ready!</h1>
                        <h1>Step 4 of 4</h1>
                    </div>

                    <div className='my-4 bg-gray-100'>
                        <div className='flex items-center gap-4 px-8 py-4 mt-2'>
                            <input type="checkbox" className='w-4 h-4' />
                            <h1 className='font-semibold text-[16px]'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</h1>
                        </div>

                        <div className='flex items-center gap-4 px-8 py-4 mt-2'>
                            <input type="checkbox" className='w-4 h-4' />
                            <h1 className='font-semibold text-[16px]'>I agree with our terms and conditions and privacy policy.</h1>
                        </div>

                    </div>
                    <div className='ml-4'>
                        <Link href={`/billing`}><button className='bg-blue-500 text-white py-3 px-6 rounded-lg  text-base font-semibold text-center'>Rent Now</button></Link>
                    </div>

                    <div>
                        <div className='m-5 mt-8'>
                            <Image src={securitysafe} alt='security' width={100} height={100} className='w-7 h-7'></Image>
                        </div>
                        <div className='m-4'>
                            <p className='font-semibold text-base'>All your data are safe</p>
                            <p className='font-medium text-sm text-gray-400'>We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Rental summary */}
            <div className='bg-white lg:w-[35%] mx-auto lg:mx-0 p-5 mt-3 rounded-lg h-fit order-1 lg:order-2'>
                <div>
                    <h1 className='font-bold text-xl'>Rental Summary</h1>
                    <p className='font-medium text-sm text-gray-300'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                </div>
                <div className='flex mt-7 justify-center items-center'>
                    <div>
                        <Image className='w-21 h-21' src={car} alt='car' width={150} height={150}></Image>
                    </div>
                    <div className='ml-4' >
                        <div>
                            <h1 className='font-bold text-[32px]'>Nissan GT - R</h1>
                            <p><Image src={`/reviewstar.png`} alt='Loading' width={250} height={250}></Image></p>
                        </div>
                    </div>
                </div>

                   <hr className='mt-7'/>
                    <div className=' ml-2 flex justify-between items-center mt-4'>
                        <h1 className='font-medium text-[16px] text-gray-400'>Subtotal</h1>
                        <p className='font-semibold text-base '>$80.00</p>
                    </div>
                    <div className=' ml-2 flex justify-between items-center mt-4'>
                        <h1 className='font-medium text-[16px] text-gray-400'>Tax</h1>
                        <p className='font-semibold text-base '>$0</p>
                    </div>

                    <div className='flex justify-around items-center mt-7 mx-4'>
                        <h1 className='font-medium text-[14px] text-gray-400'>Apply promo code</h1>
                        <p className='font-semibold text-base '>Apply now</p>
                    </div>

                    <div className='flex items-center mt-11 justify-between ml-2'>
                        <div>
                            <h1 className='font-bold text-xl'>Total Rental Price</h1>
                            <p className='font-medium text-sm text-gray-400'>Overall price and includes rental discount</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-[32px] leading-[40.32px]'>$80.00</h1>
                        </div>
                    </div>
                
            </div>


        </div >
    )
}

export default BillingPage