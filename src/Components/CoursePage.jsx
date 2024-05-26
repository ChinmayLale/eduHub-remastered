import React, { useEffect, useState } from 'react'

function CoursePage() {
    const [couese , setCourse] = useState();
    const [courseTitle , setCourseTitle] = useState('Beginning C++ Programming - From Beginner to Beyond')
    const [courseDesc , setCourseDesc] = useState('Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills. C++14 and C++17  covered. C++20 info see below.')
    const [courseInstructor , setCourseInstructor] = useState('Ayusha Homkar')
    const [courseRating , setCourseRating] = useState(4);
    const [whatYouWillLearn,setWhatYouWillLearn] = useState(['Learn to program with one of the most powerful programming languages that exists today, C++.','Learn Modern C++ rather than an obsolete version of C++ that most other courses teach','Learn C++ using a proven curriculum that covers more material than most C++ university courses','Includes Quizzes, Live Coding Exercises, Challenge Coding Exercises and Assignments','New Section: Learn all about using C++ Lambda Expressions','Obtain the key concepts of programming that will also apply to other programming languages','Learn C++ features from basic to more advanced such as inheritance and polymorphic functions','Learn C++ from an experienced university full professor who has been using and teaching C++ for more than 25 years'])
    const ratingNumber = '4/5'
    const ratings =[]
    function getRatings(){
        for (let index = 0; index < courseRating; index++) {
            ratings.push(<i class="ri-star-fill"></i>);     
        }
    }
    getRatings()

    useEffect(()=>{
        const rowdata = localStorage.getItem('courseData')
        const data = JSON.parse(rowdata);
        console.log(data);
        setCourse(data);
    },[])

    return (
        <div className='CoursePage' >
            {couese && <div className="top">
                <div className="right">
                    <h2>{couese.title}</h2>
                    <h4 >{couese.subject}</h4>
                    <h4 >{couese.courseDesc}</h4>
                    <div className="rating"><h3>{ratings}{ratingNumber}</h3></div>
                    <h4 style={{backgroundColor:'rgba(255, 255, 158,0.7)', color:'black',padding:'0 20px 0 10px' ,width:'max-content',borderRadius:'5px'}}>Instructor : {courseInstructor}</h4>
                    <button className='button-89'>Enroll Now</button>
                </div>
                <div className="left">
                    <img src={couese.img} alt="" />
                </div>
            </div>}

            <div className="detailedDesc">
               <h3>What you'll learn ?</h3>
                <div className="learn bg-red-400">
                    {whatYouWillLearn.map((ele)=>{
                        return <h3 className='text-sm w-[60%] tracking-normal font-light'><i class="ri-terminal-line" style={{margin:'5px' , fontWeight:'700'}}></i>{ele}</h3>
                    })}
                </div>
            </div>

            <div className="courseInclude relative w-[100%] h-[50vh] bg-white flex flex-col items-start p-10">
                    <h2 className='text-3xl font-bold tracking-[2px]'>This course Includes :</h2>
                    <div className="includeDesc relative m-4 w-[70%] h-full  flex flex-row flex-wrap p-10 justify-start bg-green-100 border-2 rounded-lg gap-2">
                        <h4 className='text-lg w-[40%] font-semibold'><i class="ri-youtube-line"></i> 25.5 hours on-demand video</h4>
                        <h4 className='text-lg w-[40%] font-semibold'><i class="ri-file-3-line"></i> 1 article</h4>
                        <h4 className='text-lg w-[40%] font-semibold'><i class="ri-folder-download-line"></i> 23 downloadable resources</h4>
                        <h4 className='text-lg w-[40%] font-semibold'><i class="ri-smartphone-line"></i> Access on mobile and TV</h4>
                        <h4 className='text-lg w-[40%] font-semibold'><i class="ri-trophy-line"></i> Certificate of completion</h4>
                    </div>
            </div>
        </div>
    )
}

export default CoursePage