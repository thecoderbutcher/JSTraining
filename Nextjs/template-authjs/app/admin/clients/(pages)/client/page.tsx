import React from 'react'
import Header from '../../../components/Header'
import Profile from './components/Profile'
import ListLoanClient from './components/ListLoanClient'

const client = () => {
  return (
    <div className='flex flex-col w-full gap-2'>
      <Header title="Clientes: client_id" url='/admin/clients'/>
      <Profile />
      <ListLoanClient />
    </div>
  )
}

export default client