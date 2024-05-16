import React from 'react'

const Course = ({course}) => {
        const{id,title,description,price,link,image} =course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={350} height={250}/>
            <h4 className='course-title'>{title}</h4>
            <h5>{description}</h5>
            <h3>{price}</h3>
            <a href={link} style={{textDecoration: "none"}}> bas git</a>
        </div>
    </div>
  )
}

export default Course
