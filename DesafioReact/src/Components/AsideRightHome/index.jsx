import React from 'react'
import { CardItem } from './CardItem'
import { RecentlyQueried } from './RecentlyQueried'
import { TrendingGuides } from './TrengingGuides'

export default function AsideRightHome() {
    return (
        <aside className="flex flex-col gap-2 invisible lg:visible">
            {localStorage.getItem("token") &&


                <section className="bg-white text-black rounded-md border-solid border border-gray-200">
                    <header className="p-4 rounded-md">
                        <h3 className="text-xl font-bold hover:text-blue-700 cursor-pointer ">Active Discussions</h3>
                    </header>
                    <div>
                        <CardItem title='Explain "Memory Safe Programming Languages" Like Im Five Please' comments="30 comments" />
                        <CardItem title="API Testing with Cypress - Part I" comments="2 comments" />
                        <CardItem title="Welcome Thread - v265" comments="191 comments" />
                        <CardItem title="Remote work, experiences and some ideas" comments="29 comments" />
                        <CardItem title="How to build a Good Portfolio Website - My Approach." comments="7 comments" />
                    </div>
                </section>
            }
            <section className="bg-white text-black rounded-md border-solid border border-gray-200 h-[fit-content]">
                <header className="p-4 rounded-md">
                    <h3 className="text-xl font-bold hover:text-blue-700 cursor-pointer ">#wecoded</h3>
                    <div className="text-gray-500 text-xs">we_coded is a celebration of individuals who are underrepresented and otherwise marginalized in software development on the basis of gender: including women, transgender, nonbinary, gender non-conforming, and two spirit people.</div>
                </header>


                <div className='cardItemsWrapper'>
                    <CardItem title="Another Year Of Being in Gender Minority in Tech" comments="10 comments" />
                    <CardItem title="Who Would You Have Lunch With: Womxn in Tech Edition" comments="6 comments" />
                    <CardItem title="we_coded 2024! Empowering Change for Gender Equity in Tech 🔥💪🏽" comments="7 comments" />
                    <CardItem title="31 Women in Tech Content Creators to Follow Now" comments="18 comments" />
                    <CardItem title="Women in Tech" comments="6 comments" />
                </div>



            </section>
            {!localStorage.getItem("token") && (<div className='pl-2'>

                <TrendingGuides />
                <RecentlyQueried />
            </div>)}





        </aside>
    )
}
