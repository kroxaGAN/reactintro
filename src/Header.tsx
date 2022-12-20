import logo from './assets/img/logo.svg'
import cart from './assets/img/cart.svg'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <img src={logo} alt={'logo'}/>
                </Link>
                <img src={cart} alt={'cart'}/>
        </div>

)
}