import Logo from '../logo/Logo';
import SearchInput from '../search/SearchInput';
import './header.css';

function Header() {
    return (
        <header className="page-header">
            <Logo />
            <SearchInput />
        </header>
    )
}

export default Header;
