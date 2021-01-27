import { React } from 'react';
import './header.styles.scss'

const Header = (props) => {
    const { toggleDarkTheme, changeTheme } = props;
    return (
        <div className="header">
            <nav className="navbar">
                <div className="navbar-brand">
                    Dark Theme Toogler
                </div>
                <div className="themeSwitch">
                    <button type="button" className={toggleDarkTheme ? "btn btn-light" : "btn btn-dark"} onClick={() => changeTheme()}>
                        {toggleDarkTheme ? "☀" : " ☾"}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header;