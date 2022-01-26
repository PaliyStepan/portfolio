import React, {useRef, useState} from "react";
import "./Menu.scss"
import {NavLink} from "react-router-dom";
import "../Burger/Burger.scss"
import {Power2, TweenMax, TimelineMax} from "gsap";
import {useHistory} from "react-router-dom";


const Menu = () => {

    const [burgerToggle, setBurgerToggle] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const history = useHistory();

    const toggleMenu = () =>{
        setMenuShow(!menuShow);
    };

    const toggleBurger = () => {
        setBurgerToggle(!burgerToggle);
    };

    const test = (e, link, id) => {
        toggleBurger();
        const after = () => {
            toggleMenu();
                history.push(link)
        };
        e.preventDefault();
        let arr = [...itemsList.children].filter(
            item => +item.getAttribute("id") !== id
        );
        const tl = new TimelineMax();

        TweenMax.to(arr,
            0.3,
            {x: -150,  ease: Power2.easeOut, opacity: 0},
        );

        tl.to(itemsList.children[id],
            0.2,
            {y: -10, ease: Power2.ease},
        ).to(itemsList.children[id],
            0.3,
            {x: 100, ease: Power2.ease, opacity: 0, onComplete: after},
        );
    };

    const mobileMenuToggle = () =>{
        if (!menuShow) {
            toggleBurger();
            toggleMenu();
            TweenMax.staggerFromTo(itemsList.children,
                0.3,
                {x: -100,y:0, ease: Power2.easeInOut, opacity: 0},
                {x: 0,y:0, ease: Power2.easeInOut, opacity: 1},
                0.1,
            )
        } else {
            toggleBurger();
            TweenMax.staggerTo(itemsList.children,
                0.1,
                {x: -60, ease: Power2.easeOut, opacity: 0},
                0.1,
                toggleMenu
            );
        }
    };


    let itemsList = useRef(null);

    const cl = ['Menu'];
    menuShow && cl.push('active');

    const burger = ['Burger'];
    burgerToggle && burger.push('active');

    const [links] = useState([
        {id:0, to: '/', title: "Главная", exact: true},
        {id:1, to: '/about', title: "Обо мне", exact: false},
        {id:2, to: '/skills', title: "Навыки", exact: false},
        {id:3, to: '/projects', title: "Проекты", exact: false},
        {id:4, to: '/react', title: "React", exact: false},
        {id:5, to: '/vue', title: "Vue", exact: false},
        {id:6, to: '/games', title: "Games", exact: false},
        {id:7, to: '/contacts', title: "Контакты", exact: false},
    ]);


    return(
        <div className={cl.join(" ")}>
            <header className="header">
                <div className="container">
                    <div className={burger.join(" ")}  onClick={mobileMenuToggle}>
                        <div className="Burger__line Burger__line_top"></div>
                        <div className="Burger__line Burger__line_center"></div>
                        <div className="Burger__line Burger__line_bottom"></div>
                    </div>
                </div>
            </header>
                <div className="Menu__wrap">
                    {/*<div className="Menu__bg" ref={el => (menuBg = el)}></div>*/}
                    <div className="Tag Tag__nav Tag__nav_start">&lt;nav&gt;</div>
                    <nav className="Menu__nav">
                        <ul className="Menu__list" ref={el => (itemsList = el)} >
                            {
                                links.map(link=>(
                                    <li className="Menu__list-item"  key={link.id} id={link.id}>
                                        <NavLink to={link.to} exact={link.exact} onClick={e=>test(e,link.to,link.id)}>{link.title}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="Tag Tag__nav Tag__nav_end">&lt;/nav&gt;</div>
                </div>
        </div>
    )
};

export default  Menu;
