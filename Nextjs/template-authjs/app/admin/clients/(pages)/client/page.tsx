import React from 'react'
import Header from '../components/Header'
import Profile from './components/Profile'

const client = () => {
  return (
    <div className='flex flex-col w-full gap-2'>
      <Header />
      <Profile />
    </div>
  )
}

export default client