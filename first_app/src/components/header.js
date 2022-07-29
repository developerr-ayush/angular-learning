import React from 'react'

export default function header(props) {
    return (

        <nav className=" navbar">
            <div className="inner flexbox">

                <div className="logo">
                    <h1>
                        <a href="#">{props.title}</a>
                    </h1>
                </div>
                <div className="rightNav">
                    <ul className="flexbox">
                        <span className="material-symbols-outlined closeNavBar">
                            close
                        </span>

                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="hamburger">
                    <span className="material-symbols-outlined meniIcon">
                        menu
                    </span>
                </div>
            </div>
        </nav>
    )
}
