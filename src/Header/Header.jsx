import Logo from '../Img/Logo.png'
import './Header.css'

const Header = () =>{
   return (
       <header>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <nav className='nav'>
           <a href="">Acceder</a>
        </nav>
     </header>
     

  )
}
export {Header}