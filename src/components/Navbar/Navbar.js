
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg">
        <div>
            <ul className="navbar-nav">
                <li className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/home"
                    ? "nav-item active" : "nav-item"               
                    }>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className={
                    window.location.pathname === "/articles"
                    ? "nav-item active" : "nav-item"
                }>
                    <Link className="nav-link" to="/articles">
                        Articles
                    </Link>
                </li>
                <li className={
                    window.location.pathname === "/register"
                    ? "nav-item active" : "nav-item"
                }>
                    <Link className="nav-link" to="/register">
                        Register
                    </Link>
                </li>
                <li className={
                    window.location.pathname === "/search"
                    ? "nav-item active" : "nav-item"
                }>
                    <Link className="nav-link" to="/search">
                        Search
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;