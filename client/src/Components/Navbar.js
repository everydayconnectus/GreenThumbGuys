// Dependencies.
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

const Navbar = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user)
                window.location.replace("/");
            }
        })
    }

    const unauthenticatedNavBar = () => {
        return (
            <>
                <NavLink to="/" exact={true} className="NavLink" activeClassName="active">
                    <li className="nav-item nav-link hvr-grow">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                    </li>
                </NavLink>
                <NavLink to="/register" exact={true} className="NavLink" activeClassName="active">
                    <li className="nav-item nav-link hvr-grow">
                        <i className="fa fa-user-plus" aria-hidden="true"></i> Register
                    </li>
                </NavLink>
                <NavLink to="/login" exact={true} className="NavLink" activeClassName="active">
                    <li className="nav-item nav-link hvr-grow">
                        <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                    </li>
                </NavLink>
            </>
        )
    }

    const authenticatedNavBar = () => {
        return (
            <>
                <NavLink to="/" exact={true} className="NavLink" activeClassName="active">
                    <li className="nav-item nav-link hvr-grow">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                    </li>
                </NavLink>
                {
                    user.role === "admin" ?
                        <NavLink to="/notes" exact={true} className="NavLink" activeClassName="active">
                            <li className="nav-item nav-link hvr-grow">
                                <i className="fa fa-user-plus" aria-hidden="true"></i> Tech Notes
                           </li>
                        </NavLink> : null
                }
                <NavLink to="/profile" exact={true} className="NavLink" activeClassName="active">
                    <li className="nav-item nav-link hvr-grow">
                        <i className="fa fa-home" aria-hidden="true"></i> My Profile
                    </li>
                </NavLink>

                <button type="button" id="logout" className="btn btn-link nav-item nav-link" onClick={onClickLogoutHandler}>
                    Logout
                </button>
            </>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
                <div className="navbar-brand">
                    <img className="Logo" width="350" src="../images/logos/logo.png" />
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"></div>
            <span className="navbar-text">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                    </ul>
                </div>
            </span>
        </nav>
    )
}

export default Navbar;