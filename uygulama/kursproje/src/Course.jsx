import React from 'react'

const Course = ({course}) => {
        const{id,title,description,price,link,image} =course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={250} height={250}/>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <h3>{price}</h3>
            <a href={link}> bas git</a>
        </div>
    </div>
  )
}

export default Course
