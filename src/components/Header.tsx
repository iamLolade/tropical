import React from "react"


const Header = () => {
    return (
        <header>
           <form className="form">
                <fieldset>
                    <input type="text" id="fruit" />
                </fieldset>
                <button>ADD FRUIT</button>
           </form>
        </header>
    )
}

export default Header;