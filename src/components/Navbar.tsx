import React from "react"
import logo from "../image/brand.png"

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="brand-logo" className="logo"/>
            Tropical
        </nav>
    )
}

export default Navbar;