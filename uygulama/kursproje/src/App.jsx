import React from 'react'
import Header from './Header'
import { courses } from './data'
import Course from './Course'
import './css/Course.css'

const App = () => {
  return (
    <div >
      <Header/>
      <div className='couse-main'>
      {
        courses?.map((course)=>(
          <Course course={course} key={course.id}/>
        ))
      }
    </div>

      </div>
     
  )
}

export default App
