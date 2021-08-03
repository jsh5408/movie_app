import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div>
            <div className="nav">
                <Link to="/" className="home"></Link>
                <Link to="/about">About</Link>
                <Link to="/">영화</Link>
                <Link to="/">TV 프로그램</Link>
                <Link to="/">책</Link>
            </div>
            <hr/>
        </div>
    );
}

export default Navigation;