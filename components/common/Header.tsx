import React from 'react'

function Header({title,subTitle}:{
    title:string,
    subTitle?:string
}) {
  return (
    <>
        <h2 className='h2-bold text-[#1B1464]'>{title}</h2>
        {subTitle&&<p className='p-16-regular mt-4'>{subTitle}</p>}
    </>
  )
}

export default Header