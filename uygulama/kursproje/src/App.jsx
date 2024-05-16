import React from 'react'
import Header from './Header'
import { courses } from './data'
import Course from './Course'

const App = () => {
  return (
    <div>
      <Header/>
      {
        courses?.map((course)=>(
          <Course course={course} key={course.id}/>
        ))
      }
    </div>
  )
}

export default App
