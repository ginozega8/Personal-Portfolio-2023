import Navbar from '<ginozega8>/Components/Navbar'
import React from 'react'

function About() {
    return (
        <div>
            <Navbar />
            <h2 className={"text-text-soft-yellow text-[35px] font-bold tracking-[3px] pt-[10vh] pl-[30px] pb-[50px] text-center"}>MY EXPERIENCE</h2>
            <div className={"flex xl:flex-row flex-col justify-center items-center px-[20px]"}>
                <div className={"w-[600px] h-[200px] bg-base-navy/30 hover:bg-shade-navy/30 p-[10px] rounded-md shadow-inner"}>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>2022 — PRESENT</p>
                    <h3 className='text-slate-200 text-[16px] tracking-wide'>Frontend Developer — <span className='text-text-soft-yellow'>Freelancer</span></h3>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>I freelanced as a frontend developer, overseeing client interactions for my projects and collaborating in teams for larger ones. I focused on precise design implementation, responsive product maintenance, smooth team coordination, and maintaining clean code.</p>
                </div>
                <div className={"w-[600px] h-[200px] bg-base-navy/30 hover:bg-shade-navy/30 xl:ml-[30px] p-[10px] rounded-md shadow-inner"}>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>2023 — PRESENT</p>
                    <h3 className='text-slate-200 text-[16px] tracking-wide'>Email & Frontend Developer — <span className='text-text-soft-yellow'>ICOMM</span></h3>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>I fulfilled the role of Email developer in a team that provides services for an important Argentinean bank developing email templates and managing an Email marketing platform. I also performed frontend web development tasks for ICOMM, working together with the design area according to the objectives.</p>
                </div>
                <div className={"w-[600px] h-[200px] bg-base-navy/30 hover:bg-shade-navy/30 xl:ml-[30px] p-[10px] rounded-md shadow-inner"}>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>???</p>
                    <h3 className='text-slate-200 text-[16px] tracking-wide'>To be continued...</h3>
                    <p className='text-slate-400 text-[12px] pr-[20px]'>I'm always open to new projects and ideas. If my profile fits what you're looking for, send me an Email — <strong className='text-text-soft-yellow'>I'd be happy to help!</strong></p>
                    <div className='flex justify-center pt-9'>
                    <button className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[5px] pl-[15px] pr-[32px] bg-text-soft-yellow/30 font-light text-[14px] tracking-wider'><a href='mailto:ginozega8@outlook.es' target='_blank'>Email me! <span className='animate-wiggle absolute px-2'> →</span></a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About