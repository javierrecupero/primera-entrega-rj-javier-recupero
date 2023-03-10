import './Navbar.scss'
import logo from '../../assets/imgs/burger.png'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <p className="navbar__link">Inicio</p>
                    <p className="navbar__link">Menu</p>
                    <p className="navbar__link">Contacto</p>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}