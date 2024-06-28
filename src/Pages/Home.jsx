import React, { useState } from 'react'

const Home = () => {
  const [text ,setText] = useState(false)
  const toggleText = () => {
    setText(!text)
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello, Tailwind CSS with Vite and React!
      </h1>
    </div>
  )
}

export default Home
