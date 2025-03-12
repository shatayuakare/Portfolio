import React from 'react'
import PageHeading from '../components/PageHeading'

const Resume = () => {

    const education = [
        {
            "title": "Bachelor of Computer Application",
            "collage": "Rashtrasant Tukadoji Maharaj Nagpur University",
            "year": "2022 - 2025",
            "description": "",
        },
        {
            "title": "Higher Secondary Certificate",
            "collage": "Nanaji Joshi Junior College, Shahapur",
            "year": "2021 - 2022",
            "description": "",
        },
        {
            "title": "Secondary School Certificate",
            "collage": "Janata High School, Mouda",
            "year": "2019 - 2020",
            "description": "",
        },
    ]
    const experience = [
        {
            "title": "Web Developer Intern",
            "company": "PHN Technology pvt ltd",
            "duration": "March 2023 - June 2023",
            "description": "",
        },
        {
            "title": "Web Developer Intern",
            "company": "LearnShamsher",
            "duration": "2022 - 2025",
            "description": "",
        },
        {
            "title": "Full stack Developer Intern",
            "company": "VerveBridge ",
            "duration": "2022 - 2025",
            "description": "",
        },
    ]

    return (
        <section className="content-center py-10" id="resume">
            <PageHeading title={"Year of experience"} describe={"My Resume"} />


            <div className="grid grid-cols-2 gap-14">
                <div className="">
                    <div className="ps-0 pb-6 ">
                        <h3 className='text-[2.2vw] font-semibold'>
                            Job Experience
                        </h3>
                        <div className="text-primary font-semibold text-lg">2019 - 2025</div>
                    </div>
                    <ul className="steps steps-vertical mt-4">
                        {
                            experience.map((elem, index) => (
                                <li className="step step-error shadow-xl" key={index}>
                                    <div className="rounded-xl mb-5 dark:border-dark-border light:border-light-border dark:bg-dark-lightBackground light:bg-light-lightBackground  p-8 grid gap-4 text-start" key={index}>

                                        <div className="">
                                            <h4 className='text-2xl font-semibold dark:text-dark-Text light:text-light-text'>
                                                {elem.title}
                                            </h4>
                                            <div className="dark:text-dark-lightText light:text-light-lightText font-[300]">
                                                {elem.company} ({elem.duration})
                                            </div>
                                        </div>

                                        <div className="dark:text-dark-lightText light:text-light-lightText">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa velit accusamus nisi suscipit est ad sit cumque maxime facilis cupiditate.
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                    <div className="ps-0 pb-6 ">
                        <h3 className='text-[2.2vw] font-semibold'>
                            Education Quality
                        </h3>
                        <div className="text-primary font-semibold text-lg">2019 - 2025</div>
                    </div>
                    <ul className="steps steps-vertical mt-4">
                        {
                            education.map((elem, index) => (
                                <li className="step step-error shadow-xl" key={index}>
                                    <div className="rounded-xl mb-5 dark:border-dark-border light:border-light-border dark:bg-dark-lightBackground light:bg-light-lightBackground  p-8 grid gap-4 text-start" key={index}>

                                        <div className="">
                                            <h4 className='text-2xl font-semibold dark:text-dark-Text light:text-light-text'>
                                                {elem.title}
                                            </h4>
                                            <div className="dark:text-dark-lightText light:text-light-lightText font-[300]">
                                                {elem.collage}
                                            </div>
                                        </div>

                                        <div className="dark:text-dark-lightText light:text-light-lightText">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa velit accusamus nisi suscipit est ad sit cumque maxime facilis cupiditate.
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>


        </section>
    )
}

export default Resume