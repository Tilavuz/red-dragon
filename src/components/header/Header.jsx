import './Header.css'
import icon from '../../images/icon-image.png'
import { Link } from 'react-scroll'
import { useState } from 'react'

function Header() {
  const [sticky, setSticky] = useState('')
  const [menu, setMenu] = useState(true)
  const [active, setActive] = useState('')

  window.onscroll = ()=> {
    if(window.scrollY > 100) {
      setSticky('sticky')
    }else {
      setSticky('')
    }
  }
  
  function navToggle() {
    setMenu(!menu)
    if(!menu) {
      setActive('')
    }else {
      setActive('active')
    }
  }

  return (
    <header className={`header ${sticky}`} id='header'>
        <Link className='icon' to="home"><img src={icon} alt="icon" /><span className='icon-span'><span>RED</span> DRAGON <br /> IT WORK <span>GROUP</span></span></Link>
        
        <div onClick={()=> navToggle()} className={menu ? 'bi bi-justify' : 'bi bi-x-lg'} id='menu-icon'></div>
        
        <nav className='header-navbar'>
          <Link onClick={navToggle} to="home" spy={true} smooth={true} offset={0} duration={0}>Home</Link>
          <Link to="about" onClick={navToggle} spy={true} smooth={true} offset={0} duration={0}>About</Link>
          <Link to="blog" onClick={navToggle} spy={true} smooth={true} offset={0} duration={0}>Blog</Link>
          <Link to="service" onClick={navToggle} spy={true} smooth={true} offset={0} duration={0}>Service</Link>
          <Link to="contact" onClick={navToggle} spy={true} smooth={true} offset={0} duration={0}>Contact</Link>
        </nav>
        <a href='https://t.me/Tilav_uz' className='btn'>Order</a>
    </header>
  )
}

export default Header