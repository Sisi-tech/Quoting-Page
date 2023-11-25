import React, { useState } from 'react';
import HouseBackgroundImg from '../assets/HouseBackground.jpg';

const GeneralPage = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayString = `${yyyy}-${mm}-${dd}`;

    // 60 days in the future
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 60);
    const futureDateString = futureDate.toISOString().split('T')[0];

    const [selectedDate, setSelectedDate] = useState(todayString);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [apt, setApt] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div className='w-full h-screen pt-[100px] gap-4'
            style={{ backgroundImage: `url(${HouseBackgroundImg})`, backgroundSize: '100% 100%'}}>
            <div className='flex flex-col items-center py-6'
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                <h1 className='text-5xl py-1'>Homeowner Insurance</h1>
                <p className='text-2xl py-4'>Secure a quote for the place you love</p>
                <form>
                    <div className=''>
                        <label htmlFor='eff-date' className='text-xl block' >
                            Effective Date:&nbsp;
                        </label>
                        <input 
                            type='date'
                            id='eff-date'
                            name='eff-date'
                            value={selectedDate}
                            onChange={(e)=> setSelectedDate(e.target.value)}
                            min={todayString}
                            max={futureDateString}
                            placeholder={todayString}
                            className='text-md my-1 p-2 rounded-sm border border-black hover:bg-blue-50'
                        />
                    </div>
                    {/* name row */}
                    <div className='flex gap-4'>
                        <div>
                            <label htmlFor='firstName' className='text-xl block' >First Name:&nbsp; </label>
                            <input 
                                type='text'
                                id='firstName'
                                name='firstName'
                                value={firstName}
                                placeholder='First name'
                                onChange={(e)=> setFirstName(e.target.value.toUpperCase())}
                                className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm w-[300px]'
                                />
                        </div>
                        <div>
                            <label htmlFor='middleName' className='text-xl block' >Middle Name:&nbsp; </label>
                            <input 
                                type='text'
                                id='middleName'
                                name='middleName'
                                value={middleName}
                                placeholder='Middle name'
                                onChange={(e)=> setMiddleName(e.target.value.toUpperCase())}
                                className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm w-[300px]'
                                />
                        </div>
                        <div>
                            <label htmlFor='lastName' className='text-xl block' >Last Name:&nbsp; </label>
                            <input 
                                type='text'
                                id='lastName'
                                name='lastName'
                                value={lastName}
                                placeholder='Last name'
                                onChange={(e)=> setLastName(e.target.value.toUpperCase())}
                                className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm w-[300px]'
                                />
                        </div>
                    </div>
                    <div className='flex gap-20'>
                        <div>
                            <label htmlFor='dateOfBirth' className='text-xl block'>Date of Birth</label>
                            <input id='dateOfBirth' name='dateOfBirth' type='date' className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm h-[36px]' />
                        </div>
                        <div>
                            <label htmlFor='phoneNum' className='text-xl block'>Phone Number</label>
                            <input id='phoneNum' name='phoneNum' type='text' 
                                placeholder='000-000-0000'
                                onChange={(e)=>setPhoneNum(e.target.value)}
                                className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm h-[36px] w-[200px]'/>
                        </div>
                        <div>
                            <label htmlFor='email' className='text-xl block'>Email</label>
                            <input id='email' name='email' type='email'
                                placeholder='Email'
                                onChange={(e)=>setEmail(e.target.value)} 
                                className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm h-[36px] w-[300px]'/>
                        </div>
                        </div>
                    <div>
                        <p className='text-xl py-4'>Location address:</p>
                        <div className='flex gap-26'>
                            <div>
                                <label htmlFor='street' className='text-xl block'>Street</label>
                                <input type='text' id='street' name='street' value={street} placeholder='Street address'
                                        onChange={(e)=> setStreet(e.target.value) }
                                        className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm w-[440px]' />
                            </div>
                            <div>
                                <label htmlFor='apt' className='text-xl block'>Apt#</label>
                                <input type='type' id='apt' name='apt' value={apt} 
                                        onChange={(e)=> setApt(e.target.value) } placeholder='Apt'
                                        className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm w-[260px]' />
                            </div>
                            <div>
                                <label htmlFor='county' className='text-xl block'>County</label>
                                <select id='county' name='county' className='h-[36px] text-md my-1 p-2 border border-black w-[100px]'>
                                    <option>New York</option>
                                    <option>Kings</option>
                                    <option>Queens</option>
                                    <option>Nassau</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex gap-60'>
                            <div>
                                <label htmlFor='state' className='text-xl block'>State</label>
                                <select id="state" name='state' className='h-[36px] text-md my-1 p-2 border border-black w-[100px]'>
                                    <option>New York</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor='country' className='text-xl block'>Country</label>
                                <select id='country' name='country' className='h-[36px] text-md my-1 p-2 border border-black w-[160px]'>
                                    <option>United State</option>
                                </select>
                            </div>
                            <div>
                            <label htmlFor='zipCode' className='text-xl block'>Zip Code</label>
                            <input id='zipCode' name='zipCode' value={zipCode} 
                                    onChange={(e)=> setZipCode(e.target.value) } placeholder='Zip Code'
                                    className='text-md my-1 p-2 border border-black hover:bg-blue-50 rounded-sm h-[36px] w-[160px]'  />
                            </div>
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GeneralPage;