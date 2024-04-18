import './logo.css';
import LogoImage from '../../assets/logo.png';
import NavItem from '../navItem/NavItem';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='logo'>
      <Link to='/'> <img className='logo__image' src={LogoImage} alt='logo' /> </Link>
      <NavItem />
    </div>
  )
}

export default Logo;
