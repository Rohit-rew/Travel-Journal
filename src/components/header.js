import React from 'react'

export default function Header(){
    return <header>
                <div className="holder">
                <img className="logoimage" src={require("../path.png")}/>
                <p>my travel journal.</p>
                </div>
           </header>
}