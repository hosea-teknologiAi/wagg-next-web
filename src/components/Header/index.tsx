"use client"
import { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
// import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { RootState } from 'store';
import { Icon } from "@iconify/react";

import LogoLeft from "../../../public/assets/images/logo_pic.png"
import LogoRight from "../../../public/assets/images/logo.png"
import Image from 'next/image';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const pathname = usePathname();
  // const { cartItems } = useSelector((state: RootState)  => state.cart);
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return(
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`} style={pathname == '/' ? { display: "none" } : {}}>
      <div className="container">
        <Link href="/">
          <h1 className="site-logo">
            <Image src={LogoLeft} alt="Logo" width={50} />
            <Image src={LogoRight} alt="Logo" width={100} />
          </h1>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <Link href="/pesanan">Pesanan</Link>
          <Link href="/">Inspiration</Link>
          <Link href="/">Rooms</Link>
          <button className="site-nav__btn">
            <p>Account</p>
          </button>
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className={`search-form`}>
              {/* <Icon
                icon="ph:x-bold"
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              /> */}
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
                style={{ color: "#000" }}
              />
            </form>
            {/* <Icon
              icon="material-symbols:search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            /> */}
          </button>
          {/* <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && (
                <span className="btn-cart__count">{cartItems.length}</span>
              )}
            </button>
          </Link> */}
          <Link href="/login">
            <button className="site-header__btn-avatar">
              <Icon icon="clarity:avatar-line" className="icon-avatar" />
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span></span>
            </i>
          </button>
        </div>
      </div>
    </header>
  )
};


export default Header;
