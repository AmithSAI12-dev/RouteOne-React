import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    {/* HEADER MOBILE */}
                    <div className="header__mobile">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    {/* HEADER LOGO */}
                    <a href="/" className="header__logo">
                        <Logo />
                    </a>
                    {/* HEADER NAVIGATION */}
                    <nav className="header__nav">
                        <ul className="d-flex">
                            <li className="header__navItem d-flex align-items-center justify-content-center">
                                <a href="/" className="text--uppercase">
                                    MEN
                                </a>
                            </li>
                            <li className="header__navItem d-flex align-items-center justify-content-center">
                                <a href="/" className="text--uppercase">
                                    WOMEN
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* HEADER FORM */}
                    <form
                        className="header__form d-flex align-items-center"
                        action="/"
                    >
                        <button className="header__formbtn">
                            <Search />
                        </button>
                        <input
                            className="header__forminp"
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search Products"
                        />
                    </form>
                    {/* HEADER ICONS */}
                    <div className="header__icons d-flex align-items-center justify-content-between">
                        <a href="/">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0274/4293/7933/t/477/assets/club-logo-dark.svg?v=1225262083578130312"
                                alt="Club"
                            />
                        </a>
                        <a href="/">
                            <User />
                        </a>
                        <a href="/">
                            <Heart />
                        </a>
                        <a href="/">
                            <Cart />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
