import './Navbar.scss'
import logo from '../../assets/imgs/burger.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react' 
import { LoginContext } from '../../context/LoginContext'

export const Navbar = () => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Productos</Link>
                    <Link to='/productos/Hamburguesas' className="navbar__link">Hamburguesas</Link>
                    <Link to='/productos/Nuggets' className="navbar__link">Nuggets</Link>
                    <Link to='/productos/Bebidas' className="navbar__link">Bebidas</Link>
                </nav>

                <CartWidget />
            </div>

            <div className='user'>
                <h6>Bienvenido {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}