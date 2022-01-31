import React, {useEffect, useRef, useState} from "react";
import "./Projects.scss"
import Tag from "../../components/Tag/Tag";

import { Power2, TweenMax } from "gsap";

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import  '../../components/FilterButtons/filterButtons.scss'

import img from "../../assets/img/svg/arrow__green.svg";
import imgArrow from "../../assets/img/svg/arrow.svg";
import imgGosti from "../../assets/img/projects/gosti.png";
import imgJtl from "../../assets/img/projects/jtl.png";
import imgEv from "../../assets/img/projects/evrasia.png";
import imgBau from "../../assets/img/projects/bauberg.png";
import imgFsc from "../../assets/img/projects/fsc.png";
// import imgLaser from "../../assets/img/projects/lasercut.png";
import imgToofli from "../../assets/img/projects/toofly.png";
import imgMoto from "../../assets/img/projects/cfmoto.png";
import imgTim from "../../assets/img/projects/timusol.png";
import imgForte from "../../assets/img/projects/fortevigal.png";
import imgLibe from "../../assets/img/projects/libemax.png";
import imgArtex from "../../assets/img/projects/artex.png";
import imgIcsoba from "../../assets/img/projects/icsoba.png";
import imgStels from "../../assets/img/projects/stels.png";
import imgSelect from "../../assets/img/projects/select.png";
import imgDayNight from "../../assets/img/projects/daynight.png";
import imgStreloy from "../../assets/img/projects/streloy.png";
import imgFutur from "../../assets/img/projects/futuroom.png";
import imgGlomaco from "../../assets/img/projects/glomaco.png";
import imgProteco from "../../assets/img/projects/proteco.png";
import imgOstec from "../../assets/img/projects/ostec.png";
import imgBorey from "../../assets/img/projects/borey.png";
import imgEcoService from "../../assets/img/projects/ecoService.png";
import imgTermits from "../../assets/img/projects/termits.png";
import imgIntlight from "../../assets/img/projects/intlight.png";
import imgTranswin from "../../assets/img/projects/transwin.png";
import imgHorse from "../../assets/img/projects/horse.png";
import imgAutosew from "../../assets/img/projects/autosew.png";



const Projects = () => {

    useEffect(()=>{

        const tagStart = document.querySelector('.Tag--div-start');
        const tagEnd = document.querySelector('.Tag--div-end');
        let arr = [];

	    if (
	    	window.matchMedia("(max-width: 2700px)").matches
	        && window.matchMedia("(min-width: 1450px)").matches
	    ) {
		    arr = [
			    document.querySelectorAll('.swiper-slide')[0],
			    document.querySelectorAll('.swiper-slide')[1],
			    document.querySelectorAll('.swiper-slide')[2],
			    document.querySelectorAll('.swiper-slide')[3],
		    ];
	    }

	    if (
		    window.matchMedia("(max-width: 1449px)").matches
		    && window.matchMedia("(min-width: 992px)").matches
	    ) {
		    arr = [
			    document.querySelectorAll('.swiper-slide')[0],
			    document.querySelectorAll('.swiper-slide')[1],
			    document.querySelectorAll('.swiper-slide')[2],
		    ];
	    }

	    if (
		    window.matchMedia("(max-width: 991px)").matches
		    && window.matchMedia("(min-width: 651px)").matches
	    ) {
		    arr = [
			    document.querySelectorAll('.swiper-slide')[0],
			    document.querySelectorAll('.swiper-slide')[1],
		    ];
	    }

	    if (
		    window.matchMedia("(max-width: 650px)").matches
	    ) {
		    arr = [
			    document.querySelectorAll('.swiper-slide')[0],
		    ];
	    }
        const h1End = document.querySelector('.Tag--h1-end');
        const h1EndAnim = () => {
            TweenMax.to(h1End,
                0.6,
                {ease: Power2.easeInOut, opacity: 1},
            );
        };
        const divTagsAnim = ()=> {
            TweenMax.fromTo(tagStart,
                0.6,
                { ease: Power2.easeInOut, opacity: 0, x: -50},
                { ease: Power2.easeInOut, opacity: 1, x: 0},
            );
            TweenMax.fromTo(tagEnd,
                0.6,
                { ease: Power2.easeInOut, opacity: 0, x: 50},
                { ease: Power2.easeInOut, opacity: 1, x: 0},
            );
        };

        TweenMax.staggerFromTo(itemsList.children,
            0.2,
            {ease: Power2.easeInOut, opacity: 0},
            {ease: Power2.easeInOut, opacity: 1},
            0.15,
            h1EndAnim
        );

        TweenMax.staggerFromTo(arr,
            0.6,
            {x: -100,y:0, ease: Power2.easeInOut, opacity: 0},
            {x: 0,y:0, ease: Power2.easeInOut, opacity: 1},
            -0.5,
            divTagsAnim
        );


    },[]);


    let itemsList = useRef(null);

	const arrow = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.42294 10.7171L8.64088 7.5L5.42382 4.28294L6.04765 3.65912L9.88853 7.5L6.04676 11.3418L5.42294 10.7171ZM-2.98004e-07 7.5C6.35411e-08 3.36441 3.36441 -6.35411e-08 7.5 2.98003e-07C11.6356 6.59548e-07 15 3.36441 15 7.5C15 11.6356 11.6356 15 7.5 15C3.36441 15 -6.59548e-07 11.6356 -2.98004e-07 7.5ZM0.882353 7.5C0.882352 11.1494 3.85059 14.1176 7.5 14.1176C11.1494 14.1176 14.1176 11.1494 14.1176 7.5C14.1176 3.85059 11.1494 0.882353 7.5 0.882353C3.85059 0.882353 0.882353 3.85059 0.882353 7.5Z" fill="white"/>
	</svg>

	const projects = [

	    {
		    title:"Ostec-materials",
		    desc: "Многостраничник инжинирингового предприятия",
		    link:"https://ostec-materials.ru/",
		    img: imgOstec,
		    role: "Верстка, адаптив",
		    type:'corporate'
	    },
	    {
		    title:"DayNight", desc: "Интернет магазин одежды и обуви",
		    link:"https://daynight.ru/",
		    img:imgDayNight,
		    role: "Верстка, адаптив, jquery",
		    type:'shop'
	    },
	    {
		    title:"Борей",
		    desc: "Многостраничник установки 'Борей'",
		    link:"https://borey-ostec.ru/",
		    img: imgBorey,
		    role: "Верстка, адаптив",
		    type:'landing'
	    },
	    {
		    title:"Щепорезы",
		    desc: "Многостраничник сайта Щепорезов",
		    link:"https://termits.ru/",
		    img:  imgTermits,
		    role: "Верстка, адаптив, разработка квиза",
		    type:'corporate'
	    },
	    {
		    title:"Autosew",
		    desc: "Многостраничник компании по заупуску швейных производств",
		    link:"https://autosew.ru/",
		    img:  imgAutosew,
		    role: "Верстка, адаптив, vanilla js",
		    type:'corporate'
	    },
	    {
	    	title:"Just in Time Logistix", desc: "Лендинг логистической компании",
		    link:"http://www.jtlogistix.com/",
		    img:imgJtl, role: "Верстка, адаптив, jquery",
		    type:'landing'
	    },
	    {
	    	title:"TOOFLI", desc: "Интернет-магазин итальянской обуви ",
		    link:"https://toofli.com/",
		    img:imgToofli,
		    role: "Верстка, адаптив, jquery",
		    type:'shop'
	    },
	    {
	    	title:"Eurasiakrep",
		    desc: "Многостраничный сайт крепёжной компании",
		    link:"https://eurasiakrep.ru/",
		    img:imgEv, role: "Верстка, адаптив, jquery. Разработка калькулятора.",
		    type:'shop'
	    },
	    {
	    	title:"Futuroom",
		    desc: "Многостраничный сайт студии дизайна и архитектуры",
		    link:"https://www.futuroom.net/",
		    img:imgFutur,
		    role: "Верстка, адаптив, jquery",
		    type:'corporate'
	    },

	    {
		    title:"Эко Сервис",
		    desc: "Многостраничник сайта Пеллетов",
		    link:"https://pelet74.ru/",
		    img: imgEcoService,
		    role: "Верстка, адаптив, разработка квиза",
		    type:'corporate'
	    },
	    {
	    	title:"Streloy",
		    desc: "Многостраничный сайт логистической компании",
		    link:"http://s23397.h5.modhost.pro/",
		    img:imgStreloy, role: "Верстка, адаптив, jquery",
		    type:'corporate'
	    },
	    {
	    	title:"Select Logistic",
		    desc: "Лендинг логистической компании",
		    link:"https://www.select-logistic.com/",
		    img:imgSelect, role: "Верстка, адаптив, jquery",
		    type:'landing'
	    },
	    {
	    	title:"Гости Любят",
		    desc: "Многостраничный сайт сети апартаментов",
		    link:"https://guests.love/",
		    img:imgGosti, role: "Верстка, адаптив, jquery",
		    type:'corporate'
	    },
	    {
	    	title:"Интлайт",
		    desc: "Многостраничный сайт производственной компании",
		    link:"https://eled96.ru/",
		    img:imgIntlight, role: "Верстка, адаптив, разработка квиза",
		    type:'corporate'
	    },
	    {
	    	title:"BauBerg", desc: "Многостраничный сайт компании по производству строительных смесей",
		    link:"https://bauberg.su/",
		    img:imgBau,
		    role: "Верстка, адаптив, jquery",
		    type:'corporate'
	    },
	    {
	    	title:"ФСК",
		    desc: "Многостраничный сайт тендерной площадки",
		    link:"http://tender.fsknw.ru/",
		    img:imgFsc,
		    role: "Верстка, адаптив, jquery",
		    type:'corporate'
	    },
	    {
	    	title:"Тимусол",
		    desc: "Одноэкранник медицинского препарата",
		    link:"https://timusol.ru/",
		    img:imgTim,
		    role: "Верстка, адаптив, jquery, анимации",
		    type:'oneScreen'
	    },
	    {
	    	title:"Фортевигал",
		    desc: "Одноэкранник медицинского препарата",
		    link:"https://fortevigal.ru/",
		    img:imgForte, role: "Верстка, адаптив, jquery, анимации",
		    type:'oneScreen'
	    },
	    {
	    	title:"Либемакс", desc: "Одноэкранник медицинского препарата",
		    link:"https://libemaks.ru/",
		    img:imgLibe,
		    role: "Верстка, адаптив, jquery, анимации",
		    type:'oneScreen'
	    },
	    {
	    	title:"Glomaco",
		    desc: "Лендинг фармацевтической компании",
		    link:"https://glomaco.ru/",
		    img:imgGlomaco, role: "Верстка, адаптив, jquery",
		    type:'landing'
	    },
	    {
	    	title:"Proteco",
		    desc: "Лендинг фармацевтической компании",
		    link:"https://protecogroup.com/",
		    img:imgProteco, role: "Верстка, адаптив, jquery",
		    type:'landing'
	    },
	    {
	    	title:"Сfmoto-experience", desc: "Многостраничный сайт проката квадроциклов",
		    link:"https://cfmoto-experience.ru/",
		    img:imgMoto,
		    role: "Верстка, адаптив, jquery",
		    type:'corporate'
	    },
	    {
	    	title:"Artex",
		    desc: "Одноэкранник логистической компании",
		    link:"http://artexspb.com/",
		    img:imgArtex,
		    role: "Доведение верстки до стандартов фирмы, после фрилансера.",
		    type:'oneScreen'
	    },
	    {
	    	title:"СТЭЛС",
		    desc: "Лендинг производственной компанни",
		    link:"http://spb-stels.ru/",
		    img: imgStels,
		    role: "Доведение верстки до стандартов фирмы, после фрилансера.",
		    type:'corporate'
	    },
	    {
	    	title:"Icsoba",
		    desc: "Многостраничник международной конференции ",
		    link:"https://icsoba.org/",
		    img: imgIcsoba,
		    role: "Доведение верстки до стандартов фирмы, после фрилансера.",
		    type:'corporate'
	    },
	    {
	    	title:"Transwin",
		    desc: "Лендинг логистической компании",
		    link:"https://transwin.ru/",
		    img: imgTranswin,
		    role: "Верстка, адаптив, jquery",
		    type:'landing'
	    },
	    {
	    	title:"Top Horse Club",
		    desc: "Образовательная платформа по обучению верховой езде.",
		    link:"https://tophorseclub.com/",
		    img: imgHorse,
		    role: "Верстка, адаптив, jquery",
		    type:'EduTech'
	    }
    ];

	const filterButtons = [
		{name: 'shop', translation: 'Интернет-магазин'},
		{name: 'landing', translation: 'Лендинг'},
		{name: 'corporate', translation: 'Многостраничник'},
		{name: 'oneScreen', translation: 'Одноэкранник'},
		{name: 'EduTech', translation: 'EduTech'},
	];

    const [slides, setSlides] = useState(projects);

	const setSlidesHandler = (type) => {

		let filterProjects;

		if (type === null) {
			filterProjects = projects;
		} else {
			filterProjects =  projects.filter(project => project.type === type)
		}

		setSliderFilterHandler(type);
		setSlides(filterProjects);

		console.log(slidesRef)

		swiperRef.current.swiper.slideTo(0);



	};

    const [filter, setFilter] = useState(null);
	const setSliderFilterHandler = function (type) {
		setFilter(type);
	};

	SwiperCore.use([Navigation]);

	const swiperRef = React.useRef();
	const slidesRef = React.useRef();

	const swiperPrev = () => {
		swiperRef.current.swiper.slidePrev();
	};

	const swiperNext = () => {
		swiperRef.current.swiper.slideNext();
	};


    return(

        <div className="inner">
            <div className="inner__center">

		        <div className="Projects page">
		            <div className="title">
		                <Tag tag="h1"/>
		                <h1 ref={el => (itemsList = el)}>
		                    <span>П</span>
		                    <span>р</span>
		                    <span>о</span>
		                    <span>е</span>
		                    <span>к</span>
		                    <span>т</span>
		                    <span>ы</span>
		                </h1>

		                <Tag tag="h1" end/>
		            </div>

		            <div className="inner__content">
		                <Tag tag="div"/>
		                <div className="filter-buttons">
			                <div className="filter-buttons__inner">
				                <div className="filter-buttons__list">
					                <div className={filter === null ? 'filter-button is-active' : 'filter-button '} onClick={()=>setSlidesHandler(null)}>
						                <div className="filter-button__text">
							                Все
						                </div>
						                <div className="filter-button__amount">
							                {
								                projects.length
							                }
						                </div>
					                </div>
					                {
						                filterButtons.map(btn => (
							                <div className={filter === btn.name ? 'filter-button is-active' : 'filter-button '} key={btn.name} onClick={()=>setSlidesHandler(btn.name)}>
								                <div className="filter-button__text">
									                {
										                btn.translation
									                }
								                </div>
								                <div className="filter-button__amount">
									                {
										                projects.filter(item => item.type === btn.name).length
									                }
								                </div>
							                </div>
						                ))
					                }
				                </div>
			                </div>
		                </div>


						<div className="slider">
				            <Swiper
					            modulse={[Navigation]}
					            spaceBetween={40}
					            slidesPerView={1}
					            breakpoints={{
						            651: {
							            slidesPerView: 2,
						            },
						            992: {
							            slidesPerView: 3,
						            },
						            1450: {
							            slidesPerView: 4,
						            },
					            }}
					            ref={swiperRef}
					            className='slider__init'
				            >
					            {slides.map(slide => (
						            <SwiperSlide
							            key={slide.title}
							            ref={slidesRef}
						            >
							            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="slide-item" draggable="false">
								            <div className="slide-item__img">
								                 <div className="slide-item__img-inner" style={{background: `url("${slide.img}")`}}></div>
								            </div>
								            <div className="slide-item__title">{slide.title}</div>
								            <div className="slide-item__desc">{slide.desc}</div>
								            <div className="slide-item__role-title">Роль:</div>
								            <div className="slide-item__role">
									            {slide.role}
								            </div>
								            <span className="slide-item__link">Смотреть сайт </span>
							            </a>
						            </SwiperSlide>
					            ))}

				            </Swiper>
							<div
								className="slider__btn slider__btn--prev"
								onClick={()=> swiperPrev()}
							>
								<img src={img} alt=""/>
							</div>
							<div
								className="slider__btn slider__btn--next"
								onClick={()=> swiperNext()}
							>
								<img src={img} alt=""/>
							</div>
						</div>
		                <Tag tag="div" end/>
		            </div>
		        </div>

            </div>
        </div>
    )
};

export default Projects;
