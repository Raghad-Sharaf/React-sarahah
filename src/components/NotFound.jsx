import React from 'react'
import notFound from '../img/404-error-page-not-found.jpg'

function NotFound() {
  return (
    <>
    <img src={notFound} alt="Not Found" className='w-100 h-100' />
    </>
  )
}

export default NotFound