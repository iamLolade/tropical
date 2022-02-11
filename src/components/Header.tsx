import React from "react"
import { HeaderProps } from "../interfaces/propsInterface"


const Header = ({data, handleChange, handleSubmit}: HeaderProps):JSX.Element => {
    return (
        <header>
           <form className="form" onSubmit={()=>handleSubmit}>
                <fieldset>
                    <input type="text" name="fruit" id="fruit" value={data.fruit} onChange={handleChange} autoComplete="false" required/>
                </fieldset>
                <button type="submit"
                    onClick={handleSubmit}
                >ADD FRUIT</button>
           </form>
        </header>
    )
}

export default Header;