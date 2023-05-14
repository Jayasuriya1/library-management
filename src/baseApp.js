import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({children}){
    const history = useHistory()
    return(
        <div className="baseContainer">
            <div className="sideBar">
                <div className="sideBarContent">
                    <div className="sideBarTitle">
                        <p>LIBRARY</p>
                    </div>
                    <hr></hr>
                    <div className="sideBarOption">
                        <p onClick={()=>{history.push("/")}} className="option">Dashboard</p>
                    </div>
                    <hr></hr>
                    <div className="sideBarOption">
                        <p onClick={()=>{history.push("/book")}} className="option">Books</p>
                    </div>
                    <hr></hr>
                    <div className="sideBarOption">
                        <p onClick={()=>{history.push("/book/add")}} className="option">Add Books</p>
                    </div>

                </div>
            </div>
            <div className="main">
                <div className="header">
                <i class='bx bx-user-circle bx-lg icon'></i>
                </div>
                <div className="content">
                    <div className="content-div">
                       {children}
                    </div>
                
                </div>
                <div className="footer">
                Copyright © jayasuriya 2023
                </div>
            </div>
        </div>
    )
}