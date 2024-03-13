import React from 'react'
import up from './up.jpg'
import {HiX} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'

function Header() {
  const [toggleIcon,setToggleIcon] = React.useState(false)


  const handle =() =>{
      setToggleIcon(!toggleIcon);
  };
  return (
    <div>
        <nav className='navbar'>
            <div className='container'>
                <img src={up} alt='up' className='header-img'/>
              <h1 className='upay'>UpayChat</h1>
              </div> 

              
              <div className='icons' onClick={handle}>
                {
                 toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>

                }
              </div>
        </nav>
    </div>
  )
}

export default Header