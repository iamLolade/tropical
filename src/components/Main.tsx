import React, { useState, useEffect } from "react";
import Cart from "../image/cart.png"
import { MainProps,Data, RetrieveData } from "../interfaces/propsInterface";

const Main = ({ resolvedData, handleFetch, data , handleDelete, isClicked}:MainProps) => {
    

    useEffect(() => {
        handleFetch()
    }, [data, isClicked])
    return (
        <>
            <img src={Cart} alt="Cart-image" className="cart"/>
            <main>
                <div className="content">
                    {resolvedData.map((elem: any) => {
                       return ( 
                            <div key={elem._id} className="card"> 
                                <p className="fruit">{elem.fruit}</p>
                                <p className="count">{elem.count}</p>
                                <button className="delete" onClick={()=>handleDelete(elem._id)}>❌</button>
                            </div>
                            )
                            }
                        )
                    }
                </div>
            </main>
        </>
    )
}

export default Main;