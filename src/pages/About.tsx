import Navbar from '<ginozega8>/Components/Navbar'
import Link from 'next/link'
import React from 'react'

function about() {
    return (
        <div>
            <Navbar />
            <h2 className={"text-text-soft-yellow text-[35px] font-bold tracking-[3px] pt-[10vh] pb-[30px] text-center"}>MY EXPERIENCE</h2>
            <div className={"flex xl:flex-row flex-col justify-center items-center px-[20px] space-y-2"}>
                <div className={"md:w-[600px] md:h-[225px] bg-base-navy/30 hover:bg-shade-navy/30 p-[10px] rounded-md shadow-inner"}>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>2022 — PRESENT</p>
                    <h3 className='text-slate-200 text-[16px] tracking-wide'>Frontend Developer — <span className='text-text-soft-yellow'>Freelancer</span></h3>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>I freelanced as a frontend developer, working alone for small projects and collaborating in teams for larger ones. I focused on precise design implementation, responsive product maintenance, smooth team coordination, and maintaining clean code.</p>
                    <div className='flex justify-left pt-2 space-x-2 space-y-2 flex-wrap'>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] mt-[8px] ml-[8px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>Typescript</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>React</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>NextJS</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>Tailwind</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>Gitlab / Github</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>Scrum</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>Jira</span>
                    </div>
                </div>
                <div className={"md:w-[600px] md:h-[225px] bg-base-navy/30 hover:bg-shade-navy/30 xl:ml-[30px] p-[10px] rounded-md shadow-inner"}>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>2023 — PRESENT</p>
                    <h3 className='text-slate-200 text-[16px] tracking-wide'>Email & Frontend Developer — <span className='text-text-soft-yellow'>ICOMM</span></h3>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>I fulfilled the role of Email developer in a team that provides services for an important Argentinean bank developing email templates and managing an Email marketing platform. I also performed frontend web development tasks for ICOMM, working together with the design area according to the objectives.</p>
                    <div className='flex justify-left pt-2 space-x-2 space-y-2 flex-wrap'>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] mt-[8px] ml-[8px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>HTML</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>CSS</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>JavaScript</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>Typescript</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>Tailwind</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>React</span>
                    <span className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[2px] px-[10px] bg-text-soft-yellow/20 font-light text-[12px] tracking-wider'>React Email</span>
                    </div>
                </div>
                <div className={"md:w-[600px] md:h-[225px] bg-base-navy/30 hover:bg-shade-navy/30 xl:ml-[30px] p-[10px] rounded-md shadow-inner"}>
                    <p className='text-slate-400 text-[12px] pr-[20px] tracking-wide'>???</p>
                    <h3 className='text-slate-200 text-[16px] tracking-wide'>To be continued...</h3>
                    <p className='text-slate-400 text-[12px] pr-[20px]'>I'm always open to new projects and ideas. If my profile fits what you're looking for, send me an Email — <strong className='text-text-soft-yellow'>I'd be happy to help!</strong></p>
                    <div className='flex justify-center pt-9'>
                    <button className='rounded-full border-2 border-text-soft-yellow text-text-soft-yellow py-[5px] pl-[15px] pr-[32px] bg-text-soft-yellow/30 font-light text-[14px] tracking-wider'><a href='mailto:ginozega8@outlook.es' target='_blank'>Email me! <span className='animate-wiggle absolute px-2'> →</span></a></button>
                    </div>
                </div>
            </div>
            <h3 className={"text-text-soft-yellow text-[14px] font-bold tracking-[3px] pt-[10vh] pl-[20px] pb-[30px] text-left"}>— Still wanna know more? Go see some of my <Link href="/projects" className='animate-pulse text-black bg-text-soft-yellow hover:bg-slate-200'>PROJECTS!</Link></h3>
        </div>
    )
}

export default about