import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const numberOfItems = useSelector(state=>state.cart)
  return (
    <div className='flex flex-row items-center bg-slate-500 text-white h-8'>
        <span className='font-extrabold basis-1/2 mx-2'> LOGO </span>
        <div className='basis-1/2 flex justify-evenly mx-2'> 
            <Link className='font-bold' to='/'>Home</Link>
            <Link className='font-bold' to='/cart'>Cart</Link>
            <span> Cart items: {numberOfItems.length} </span>
        </div>
    </div>
  )
}

export default NavBar