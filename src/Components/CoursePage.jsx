import React, { useState } from 'react'

function CoursePage() {
    const [courseTitle , setCourseTitle] = useState('Beginning C++ Programming - From Beginner to Beyond')
    const [courseDesc , setCourseDesc] = useState('Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills. C++14 and C++17  covered. C++20 info see below.')
    const [courseInstructor , setCourseInstructor] = useState('Ayusha Homkar')



    return (
        <div className='CoursePage' >
            <div className="top">'
                <div className="right">
                    <h4 >Development  C/C++ Begginer</h4>
                    <h1 style={{width:'60%'}}>{courseTitle}</h1>
                    <h4 style={{width:'60%'}}>{courseDesc}</h4>
                    <h2>Instructor : {courseInstructor}</h2>
                    <button>Enroll Now</button>
                </div>
                <div className="left">
                    <img src="https://picsum.photos/400/400" alt="" />
                </div>
            </div>
        </div>
    )
}

export default CoursePage