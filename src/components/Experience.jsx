import React from 'react'

function Experience() {
 const techs=[
    {
    id:1,
    src:"./html.png",
    title:"HTML",
    style:'shadow-orange-500'
 },
 {
    id:2,
    src:"./css.png",
    title:"CSS",
    style:'shadow-blue-500'
 },
 {
    id:3,
    src:"./javascript.png",
    title:"JAVASCRIPT",
    style:'shadow-yellow-500'
 },
 {
    id:4,
    src:"./react.png",
    title:"REACT",
    style:'shadow-blue-600'
 },
 {
    id:5,
    src:"./tailwind.png",
    title:"TAILWIND",
    style:'shadow-sky-400'
 },
 {
    id:6,
    src:"./nextjs.png",
    title:"NextJs",
    style:'shadow-white'
 },
 {
    id:7,
    src:"graphql.png",
    title:"GraphQl",
    style:'shadow-pink-500'
 },
 {
    id:8,
    src:"github.png",
    title:"GitHub",
    style:'shadow-gray-400'
 },
]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
