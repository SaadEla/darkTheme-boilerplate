import { React } from 'react';
import './header.styles.scss'

const Header = (props) => {
    const {toggleDarkTheme, changeTheme } = props;
    return (
        <div className={toggleDarkTheme ? "header dark" : "header light"}>
            <nav className="navbar">
                <div className="navbar-brand">
                    Dark Theme Toogler
                </div>
                <div className="themeSwitch">
                    <button type="button" className="btn btn-dark" onClick={()=>changeTheme()}>
                        {toggleDarkTheme ? "Light" : "Dark"}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header;