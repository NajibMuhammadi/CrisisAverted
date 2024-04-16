import Favorite from '../favotites/Favorite';
import Logo from '../logo/Logo';
import SearchInput from '../search/SearchInput';
import './header.css';

function Header() {
    return (
        <header className="page-header">
            <Logo />
            <SearchInput />
            <Favorite />
        </header>
    )
}

export default Header;
