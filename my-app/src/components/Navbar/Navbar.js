import './Navbar.scss'
import logo from '../../assets/imgs/burger.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

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
        </header>
    )
}