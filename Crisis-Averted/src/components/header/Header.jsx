import Logo from '../logo/Logo';
import SearchInput from '../search/SearchInput';
import './header.css';

function Header({ setMovies }) {
    return (
        <header className="page-header">
            <Logo />
            <SearchInput setMovies={setMovies} />
        </header>
    )
}

export default Header;
