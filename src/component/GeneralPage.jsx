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
                            className='text-md my-1 p-1 rounded-sm border border-black hover:bg-blue-50'
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
                                onChange={(e)=> setFirstName(e.target.value)}
                                className='text-md my-1 p-1 border border-black hover:bg-blue-50 rounded-sm w-[300px]'
                                />
                        </div>
                        <div>
                            <label htmlFor='middleName' className='text-xl block' >Middle Name:&nbsp; </label>
                            <input 
                                type='text'
                                id='middleName'
                                name='middleName'
                                value={middleName}
                                onChange={(e)=> setFirstName(e.target.value)}
                                className='text-md my-1 p-1 border border-black hover:bg-blue-50 rounded-sm w-[300px]'
                                />
                        </div>
                        <div>
                            <label htmlFor='lastName' className='text-xl block' >Last Name:&nbsp; </label>
                            <input 
                                type='text'
                                id='lastName'
                                name='lastName'
                                value={lastName}
                                onChange={(e)=> setFirstName(e.target.value)}
                                className='text-md my-1 p-1 border border-black hover:bg-blue-50 rounded-sm w-[300px]'
                                />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GeneralPage;