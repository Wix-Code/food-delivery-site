import React from 'react'
import { Link } from 'react-router-dom'

const Cak = () => {
  return (
    <div className='cancan'>
      <div className="cancan1">
         <h1>Cakes</h1>
         <div className="cancan2">
           <Link to="/"><h2>Home</h2></Link>
           <span>/</span>
           <Link to="/menu"><h2>Menu</h2></Link>
           <span>/</span>
           <h2>Cakes</h2>
         </div>
      </div>
    </div>
  )
}

export default Cak