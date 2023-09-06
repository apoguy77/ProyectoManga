import Logo from '../Img/Logo.png'
import './Header.css'

const Header = () =>{
   return (
       <header>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <nav>
            <a href=''>link 2</a>
            <a href=''>link 3</a>       
            <a href=''>link 1</a>
        </nav>
        <nav className='nav1'>
            <a href="">Registro</a>
            <a href="">Login</a>
        </nav>
     </header>
     

  )
}
export {Header}