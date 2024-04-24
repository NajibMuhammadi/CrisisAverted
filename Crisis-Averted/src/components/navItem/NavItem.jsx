import './navItem.css';
import { Link } from 'react-router-dom';

function NavItem() {
    return (
        <ul className='header__navItem'>
            <Link to='/' className='header__navItem-link'>Home</Link>
            <Link to='/top-imdb' className='header__navItem-link'>Top IMDb</Link>
            <Link to='/favoritesPage' className='header__navItem-link'>Favorites</Link>
            <Link to='/watchlistPage' className='header__navItem-link'>Watchlist</Link>
        </ul>
    )
}

export default NavItem;
