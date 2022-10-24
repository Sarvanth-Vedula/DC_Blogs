import React from 'react'
import {Link} from "react-router-dom";
import transitions from "bootstrap";

const Header = ({active,setActive,user,handleLogout}) => {
    const userID=user?.uid;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid bg-faded padding-media">
            <div className="container padding-media">
                <nav className="navbar navbar-toggleable-md navbar-light">
                    <button className='navbar-toggler mt-3' 
                            type='button' 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            data-bs-parent="#navbarSupportedContent" 
                            aria-controls='navbarSupportedContent'
                            aria-expanded='true'
                            aria-label='Toggle Navigation'
                    >
                        <span className='fa fa-bars'></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/" style={{textDecoration:"none"}}>
                            <li className={`nav-item nav-link ${active === "home" ? "active" : ""}`}onClick={() => setActive("home")}>
                                HOME </li>
                            </Link>
                            
                            <Link to="/create" style={{textDecoration:"none"}}>
                            <li className={`nav-item nav-link ${active === "create" ? "active" : ""}`}onClick={() => setActive("create")}>
                                CREATE </li>
                            </Link>                            
                            <Link to="/about" style={{textDecoration:"none"}}>
                            <li className={`nav-item nav-link ${active === "about" ? "active" : ""}`}onClick={() => setActive("about")}>
                                ABOUT </li>
                            </Link>
                        </ul>
                        <div className="row g-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {userID?(
                                <>
                                <div className="profile-logo">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="LOGO" style={{width:"30px",height:"30px",borderRadius:"50%",marginTop:"11px"}}/>
                                </div>
                                <p style={{marginTop:"11px",marginLeft:"5px"}}>{user?.displayName}</p>
                                <li className="nav-item nav-link" onClick={handleLogout}>LOGOUT</li>
                                </>
                            ):(
                                <Link to="/authentication" style={{textDecoration:"none"}}>
                                <li className={`nav-item nav-link ${active === "login" ? "active" : ""}`}onClick={() => setActive("login")}>
                                    LOGIN </li>
                            </Link>
                            )}
                            {/* <li className="nav-item nav-link">LOGOUT</li> */}

                        </ul>                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </nav>
  )
}

export default Header