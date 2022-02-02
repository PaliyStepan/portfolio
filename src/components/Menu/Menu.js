import React, {useEffect, useRef, useState} from "react";
import "./Menu.scss"
import {NavLink} from "react-router-dom";
import "../Burger/Burger.scss"
import {Power2, TweenMax, TimelineMax} from "gsap";
import {useHistory} from "react-router-dom";


const Menu = () => {

	const theme = <svg className="svg" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M5.5 16.196C6.557 16.71 7.745 17 9 17c4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8-1.255 0-2.443.29-3.5.804C2.836 3.103 1 5.837 1 9c0 3.163 1.836 5.898 4.5 7.196zM16 9c0 3.866-3.134 7-7 7-.854 0-1.673-.153-2.43-.433C8.643 14.12 10 11.719 10 9c0-2.719-1.357-5.121-3.43-6.567C7.327 2.153 8.146 2 9 2c3.866 0 7 3.134 7 7z"
			fill-rule="nonzero" fill-opacity="1" ></path>
	</svg>


	const [burgerToggle, setBurgerToggle] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const history = useHistory();

    const toggleMenu = () =>{
        setMenuShow(!menuShow);
        document.querySelector('html').classList.toggle('is-fixed')
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

    const addDarkClassToggle = () => {
        if (localStorage.getItem('theme') === 'dark') {
        	localStorage.removeItem('theme');
        	console.log(1)
        } else {
            localStorage.setItem('theme', 'dark');
            console.log(2)
        }

	    addDarkClass();
    };

	const  addDarkClass = () => {
		if (localStorage.getItem('theme') === 'dark') {
			document.querySelector('body').setAttribute('data-theme','light');
		} else {
			document.querySelector('body').setAttribute('data-theme','dark');
		}

	};


	useEffect(()=>{
		addDarkClass();

	},[]);


    return(
        <div className={cl.join(" ")}>
            <header className="Menu__header">
                <div className="container Menu__header-container">
	                <div className="Menu__toggler" onClick={()=>addDarkClassToggle()}>
		                {
			                theme
		                }
	                </div>
                    <div className={burger.join(" ")}  onClick={mobileMenuToggle}>
                        <div className="Burger__line Burger__line--top"></div>
                        <div className="Burger__line Burger__line--center"></div>
                        <div className="Burger__line Burger__line--bottom"></div>
                    </div>
                </div>
            </header>
                <div className="Menu__wrap">
                    <div className="Tag Tag__nav Tag__nav_start">&lt;nav&gt;</div>
                    <nav className="Menu__nav">
                        <ul className="Menu__list" ref={el => (itemsList = el)} >
                            {
                                links.map(link=>(
                                    <li className="Menu__item"  key={link.id} id={link.id}>
                                        <NavLink to={link.to} className="Menu__link" exact={link.exact} onClick={e=>test(e,link.to,link.id)}>{link.title}</NavLink>
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
