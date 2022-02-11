import React, { useState, useEffect } from "react";
import Cart from "../image/cart.png"
import { MainProps,Data, RetrieveData } from "../interfaces/propsInterface";

const Main = ({ resolvedData, handleFetch, data }:MainProps) => {

    useEffect(() => {
        handleFetch()
    }, [data])
    return (
        <>
            <img src={Cart} alt="Cart-image" className="cart"/>
            <main>
                <div className="content">
                    {resolvedData.map((elem: any) => {
                       return ( 
                            <div key={elem._id}> 
                                <p>{elem.fruit}</p>
                                <p>{elem.count}</p>
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