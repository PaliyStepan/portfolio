import React, {useEffect, useRef, useState} from "react";
import "./Vue.scss"
import Tag from "../../components/Tag/Tag";
import {CSSTransition} from "react-transition-group";
import Slider from "react-slick";
import img from "../../assets/img/svg/arrow__green.svg";
// import imgArrow from "../../assets/img/svg/arrow.svg";
import { Power2, TweenMax} from "gsap";

import raectProjImg1 from "../../assets/img/vue/vue_1.png";
import raectProjImg2 from "../../assets/img/vue/vueGitSearch.png";
import raectProjImg3 from "../../assets/img/vue/vue_2.png";


const ReactBlock = () => {
    const eye = <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9588 7.37286C18.4483 3.52933 14.4447 0.945801 10 0.945801C5.55532 0.945801 1.55179 3.52933 0.0411986 7.37286C-0.0129191 7.51051 -0.0129191 7.66462 0.0411986 7.80227C1.55296 11.647 5.55532 14.2305 10 14.2305C14.4447 14.2305 18.4471 11.6482 19.9588 7.80345C20.0141 7.66462 20.0141 7.51168 19.9588 7.37286ZM10 13.054C6.12002 13.054 2.62473 10.867 1.22473 7.58815C2.62355 4.30933 6.11885 2.12227 10 2.12227C13.8812 2.12227 17.3765 4.30933 18.7753 7.58815C17.3753 10.8658 13.88 13.054 10 13.054ZM10 3.30227C7.63649 3.30227 5.71414 5.22462 5.71414 7.58815C5.71414 9.95168 7.63649 11.874 10.0012 11.874C12.3636 11.874 14.2871 9.95168 14.2871 7.58815C14.2871 5.22462 12.3636 3.30227 10 3.30227ZM10 10.6976C8.28473 10.6976 6.88943 9.30227 6.88943 7.58815C6.88943 5.87404 8.28591 4.47874 10 4.47874C11.7141 4.47874 13.1094 5.87404 13.1094 7.58815C13.1094 9.30227 11.7153 10.6976 10 10.6976ZM10 5.99168C9.12002 5.99168 8.40355 6.70815 8.40355 7.58815C8.40355 8.46815 9.12002 9.18462 10 9.18462C10.88 9.18462 11.5965 8.46815 11.5965 7.58815C11.5965 6.70815 10.88 5.99168 10 5.99168ZM10 8.00815C9.76826 8.00815 9.58002 7.81992 9.58002 7.58815C9.58002 7.35639 9.76826 7.16815 10 7.16815C10.2318 7.16815 10.42 7.35639 10.42 7.58815C10.42 7.81992 10.2318 8.00815 10 8.00815Z" fill="white"/>
    </svg>;

    const git = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0.000546875C4.485 0.000546875 0 4.48555 0 10.0005C0 14.828 3.45 18.833 8.0075 19.7668C8.3575 19.833 8.7325 19.5368 8.75 19.1793V14.1018C8.75875 13.8218 8.55375 13.548 8.28125 13.4768C6.3 12.9305 5 11.5593 5 10.0005C5 9.16555 5.385 8.35055 6.055 7.69555C6.1725 7.58555 6.2425 7.4268 6.25 7.2668V5.35055L8.20375 6.32805C8.325 6.38305 8.46375 6.3968 8.59375 6.36805C9.46875 6.2393 10.49 6.23305 11.4062 6.36805C11.5363 6.3968 11.675 6.38305 11.7975 6.32805L13.75 5.35305V7.26555C13.7563 7.42805 13.8275 7.58555 13.945 7.69555C14.615 8.35055 15 9.16555 15 10.0005C15 11.558 13.7 12.9293 11.7188 13.4755C11.4462 13.5468 11.2413 13.8205 11.25 14.1005V19.1805C11.2662 19.5368 11.6412 19.833 11.9925 19.768C16.55 18.8318 20 14.8255 20 9.99805C20 4.48305 15.515 -0.00195312 10 -0.00195312V0.000546875ZM10 1.25055C14.84 1.25055 18.75 5.16055 18.75 10.0005C18.75 13.953 16.0938 17.1943 12.5 18.2818V14.413C14.6062 13.648 16.25 12.0718 16.25 10.0005C16.25 8.88805 15.7312 7.8793 15 7.07055V4.37555C15.0162 3.94555 14.4875 3.60055 14.1 3.78805L11.3688 5.1193C10.5563 4.9568 9.41875 4.9818 8.63375 5.1193L5.9 3.78805C5.5125 3.60055 4.98375 3.94555 5 4.37555V7.07055C4.26875 7.8793 3.75 8.88805 3.75 10.0005C3.75 12.0718 5.39375 13.648 7.5 14.413V15.1568C7.1175 15.353 6.935 15.3918 6.7575 15.3918C6.0375 15.3918 6.145 13.7505 4.375 13.7505C3.56 13.7505 3.5575 15.0005 4.375 15.0005C5.3375 15.0005 5.305 16.633 6.5625 16.6468C6.8625 16.6493 7.16875 16.6293 7.5 16.5243V18.2805C3.90625 17.1943 1.25 13.953 1.25 10.0005C1.25 5.16055 5.16 1.25055 10 1.25055Z" fill="white"/>
    </svg>;

    const close = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.8318 9.0002L17.6506 16.819L16.8189 17.6508L9.00003 9.83196L1.18121 17.6508L0.349443 16.819L8.16827 9.0002L0.348267 1.18137L1.18003 0.349609L9.00003 8.16843L16.8189 0.349609L17.6506 1.18137L9.8318 9.0002Z" fill="#6ABEB9"/>
    </svg>;



    const [slides] = useState([
        {id:0, img: raectProjImg1, linkGit: "https://github.com/PaliyStepan/vue-colors" ,link: "https://vue-colors-c6574.firebaseapp.com/" ,title: "Shop", desc: "Интернет магазин", more: "Интернет магазин с корзиной, фильтрацией,сортировкой и пагинацией. В проекте зайдествован Vuex, Firebase."},
        {id:1, img: raectProjImg2, linkGit: "https://github.com/PaliyStepan/veuSearchGit" ,link: "https://git-vue-search.firebaseapp.com/" ,title: "Github Search", desc: "Github Search", more: "SPA по поиску юзеров git, используя github API."},
        {id:12, img: raectProjImg3, linkGit: "https://github.com/PaliyStepan/vueTodo" ,link: "https://vuetodo-e60d8.firebaseapp.com/" ,title: "To Do List", desc: "To Do List", more: "Простой To Do List с добавлением новых 'To Do' и их фильтрацией"},
    ]);

    let sliderSettings = {
        infinite: false,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    useEffect(()=>{
        const activeSlides = document.querySelectorAll('.slick-active');
        const tagStart = document.querySelector('.Tag--div-start');
        const tagEnd = document.querySelector('.Tag--div-end');
        const arr = [...activeSlides];

        const divTagsAnim = ()=> {
            TweenMax.fromTo(tagStart,
                0.6,
                { ease: Power2.easeInOut, opacity: 0, x: -50},
                { ease: Power2.easeInOut, opacity:1, x: 0},
            );
            TweenMax.fromTo(tagEnd,
                0.6,
                { ease: Power2.easeInOut, opacity: 0, x: 50},
                { ease: Power2.easeInOut, opacity: 1, x: 0},
            );
        };




        TweenMax.staggerFromTo(arr,
            0.6,
            {x: -100,y:0, ease: Power2.easeInOut, opacity: 0},
            {x: 0,y:0, ease: Power2.easeInOut, opacity: 1},
            -0.5,
            divTagsAnim
        );


        const h1End = document.querySelector('.Tag--h1-end');
        const h1EndAnim = () => {
            TweenMax.to(h1End,
                0.6,
                {ease: Power2.easeInOut, opacity: 1},
            );

        };


        TweenMax.staggerFromTo(itemsList.children,
            0.2,
            {ease: Power2.easeInOut, opacity: 0},
            {ease: Power2.easeInOut, opacity: 1},
            0.15,
            h1EndAnim
        );

    },[]);


    let itemsList = useRef(null);




    const [modalToggler, setModalToggler] = useState(false);

    const modalToggle = () =>{
        setModalToggler(!modalToggler);
    };


    const [modal, setModal] = useState({});

    const onModalToggle = (title, desc, link, linkGit,more, note) => {
        modalToggle()
        setModal({
            title, desc, link, linkGit, more, note
        })
    };

	const arrow = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.42294 10.7171L8.64088 7.5L5.42382 4.28294L6.04765 3.65912L9.88853 7.5L6.04676 11.3418L5.42294 10.7171ZM-2.98004e-07 7.5C6.35411e-08 3.36441 3.36441 -6.35411e-08 7.5 2.98003e-07C11.6356 6.59548e-07 15 3.36441 15 7.5C15 11.6356 11.6356 15 7.5 15C3.36441 15 -6.59548e-07 11.6356 -2.98004e-07 7.5ZM0.882353 7.5C0.882352 11.1494 3.85059 14.1176 7.5 14.1176C11.1494 14.1176 14.1176 11.1494 14.1176 7.5C14.1176 3.85059 11.1494 0.882353 7.5 0.882353C3.85059 0.882353 0.882353 3.85059 0.882353 7.5Z" fill="white"/>
	</svg>


	const sliderSlides = slides.map((slide, index) =>(
        <div className="slide-item" key={index} onClick={()=>onModalToggle(slide.title,slide.desc,slide.link,slide.linkGit, slide.more, slide.note)}>
            <span className="slide-item__img">
                <span className="slide-item__img-inner" style={{background: `url("${slide.img}")`}}></span>
            </span>
            <div className="slide-item__title">{slide.title}</div>
            <div className="slide-item__desc">{slide.desc}</div>
            <span className="slide-item__link">Смотреть {arrow}</span>
        </div>
    ));




	return(

        <div className="inner">

            <div className="inner__center">
		        <div className="React page">
		            <div className="title">
		                <Tag tag="h1"/>
		                <h1 ref={el => (itemsList = el)}>
		                    <span>V</span>
		                    <span>u</span>
		                    <span>e</span>
		                </h1>
		                <Tag tag="h1" end/>
		            </div>
		            <div className="inner__content">
		                <Tag tag="div"/>
		                <p className="react__desc">Проекты, которые я создал в процессе изучения Vue </p>
		                <Slider {...sliderSettings}>
		                    {sliderSlides}
		                </Slider>
		                <Tag tag="div" end/>
		            </div>


		                    <CSSTransition
		                        in={modalToggler}
		                        timeout={200}
		                        classNames="alert"
		                        unmountOnExit
		                    >
		                        <div className="modal" >
		                            <div className="modal__body">
		                                <div className="modal__close" onClick={modalToggle}>
		                                   {close}
		                                </div>
		                                <div className="modal__content">
		                                    <h1>{modal.title}</h1>
		                                    <p>{modal.more}</p>
		                                    {modal.note && <div className="modal__note">
		                                        <h3>Для авторизации в проекте, используйте эти данные</h3>
		                                        <p>
		                                            <span>login:</span>
		                                            {modal.note.login}
		                                        </p>
		                                        <p>
		                                            <span>Password:</span>
		                                            {modal.note.pass}
		                                        </p>
		                                    </div>}
		                                    <div className="modal__footer">
		                                        <a href={modal.link} target="_blank" rel="noopener noreferrer"> Смотреть проект {eye}</a>
		                                        <a href={modal.linkGit} target="_blank" rel="noopener noreferrer"> Смотреть код на GitHub {git}</a>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="modal__bg" onClick={modalToggle}></div>
		                        </div>
		                    </CSSTransition>
		        </div>
	        </div>
	    </div>
    )
};

export default ReactBlock;


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img src={img} alt="arrow"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img src={img} alt="arrow"/>
        </div>
    );
}
