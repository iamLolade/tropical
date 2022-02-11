import React from "react"
import { HeaderProps } from "../interfaces/propsInterface"


const Header = ({data, handleChange, handleSubmit}: HeaderProps):JSX.Element => {
    return (
        <header>
           <form className="form">
                <fieldset>
                    <input type="text" name="fruit" id="fruit" value={data.fruit} onChange={handleChange}/>
                </fieldset>
                <button
                    onClick={handleSubmit}
                >ADD FRUIT</button>
           </form>
        </header>
    )
}

export default Header;