import React from "react";
import "./LoadingModal.css"
import duck from "../images/duck-searching.gif"
const BasicUsage = () => {
    return  (
        <div className="popup">
            <div className="popup-inner">
                <img src={duck} className="img"/>
                <h1 className="mint">Your Data is Loading....</h1>
            </div>
        </div>
    );
}

export default BasicUsage;