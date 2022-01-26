import React, {useEffect, useRef, useState} from "react";
import "./Projects.scss"
import Tag from "../../components/Tag/Tag";
import Slider from "react-slick";
import img from "../../assets/img/svg/arrow__green.svg";
import imgArrow from "../../assets/img/svg/arrow.svg";
import { Power2, TweenMax } from "gsap";

import imgGosti from "../../assets/img/projects/gosti.png";
import imgJtl from "../../assets/img/projects/jtl.png";
import imgEv from "../../assets/img/projects/evrasia.png";
import imgBau from "../../assets/img/projects/bauberg.png";
import imgFsc from "../../assets/img/projects/fsc.png";
import imgLaser from "../../assets/img/projects/lasercut.png";
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



const Projects = () => {

    useEffect(()=>{
        let activeSlides = document.querySelectorAll('.slick-active');
        const tagStart = document.querySelector('.Tag__div_start');
        const tagEnd = document.querySelector('.Tag__div_end');
        let arr = [...activeSlides];


        const h1End = document.querySelector('.Tag__h1_end');

        const h1EndAnim = () => {
            TweenMax.to(h1End,
                0.6,
                {ease: Power2.easeInOut, opacity: 0.5},
            );
        };

        const divTagsAnim = ()=> {
            TweenMax.fromTo(tagStart,
                0.6,
                { ease: Power2.easeInOut, opacity: 0, x: -50},
                { ease: Power2.easeInOut, opacity: 0.5, x: 0},
            );
            TweenMax.fromTo(tagEnd,
                0.6,
                { ease: Power2.easeInOut, opacity: 0, x: 50},
                { ease: Power2.easeInOut, opacity: 0.5, x: 0},
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const [slides] = useState([
        {title:"Just in Time Logistix", desc: "Лендинг логистической компании", link:"http://www.jtlogistix.com/",
            img:imgJtl, role: "Верстка, адаптив, jquery" },
        {title:"DayNight", desc: "Интернет магазин одежды и обуви", link:"https://daynight.ru/",
            img:imgDayNight, role: "Верстка, адаптив, jquery" },
        {title:"TOOFLI", desc: "Интернет-магазин итальянской обуви ", link:"https://toofli.com/",
            img:imgToofli, role: "Верстка, адаптив, jquery" },
        {title:"Eurasiakrep", desc: "Многостраничный сайт крепёжной компании", link:"https://eurasiakrep.ru/",
            img:imgEv, role: "Верстка, адаптив, jquery" },
        {title:"Futuroom", desc: "Многостраничный сайт студии дизайна и архитектуры", link:"https://www.futuroom.net/",
            img:imgFutur, role: "Верстка, адаптив, jquery" },
        {title:"Streloy", desc: "Многостраничный сайт логистической компании", link:"http://s23397.h5.modhost.pro/",
            img:imgStreloy, role: "Верстка, адаптив, jquery" },
        {title:"Select Logistic", desc: "Лендинг логистической компании", link:"https://www.select-logistic.com/",
            img:imgSelect, role: "Верстка, адаптив, jquery" },
        {title:"Гости Любят", desc: "Многостраничный сайт сети апартаментов", link:"https://guests.love/",
            img:imgGosti, role: "Верстка, адаптив, jquery" },
        {title:"BauBerg", desc: "Многостраничный сайт компании по производству строительных смесей", link:"https://bauberg.su/",
            img:imgBau, role: "Верстка, адаптив, jquery" },
        {title:"ФСК", desc: "Многостраничный сайт тендерной площадки", link:"http://tender.fsknw.ru/",
            img:imgFsc, role: "Верстка, адаптив, jquery" },
        {title:"Lasercut", desc: "Интернет-магазин лазерных станков", link:"https://lasercut.ru/",
            img:imgLaser, role: "Верстка, адаптив, jquery" },
        {title:"Тимусол", desc: "Одноэкранник медицинского препарата", link:"https://timusol.ru/",
            img:imgTim, role: "Верстка, адаптив, jquery" },
        {title:"Фортевигал", desc: "Одноэкранник медицинского препарата", link:"https://fortevigal.ru/",
            img:imgForte, role: "Верстка, адаптив, jquery" },
        {title:"Либемакс", desc: "Одноэкранник медицинского препарата", link:"https://libemaks.ru/",
            img:imgLibe, role: "Верстка, адаптив, jquery" },
        {title:"Glomaco", desc: "Лендинг фармацевтической компании", link:"https://glomaco.ru/",
            img:imgGlomaco, role: "Верстка, адаптив, jquery" },
        {title:"Glomaco", desc: "Лендинг фармацевтической компании", link:"https://protecogroup.com/",
            img:imgProteco, role: "Верстка, адаптив, jquery" },
        {title:"Сfmoto-experience", desc: "Многостраничный сайт проката квадроциклов", link:"https://cfmoto-experience.ru/",
            img:imgMoto, role: "Верстка, адаптив, jquery" },
        {title:"Artex", desc: "Одноэкранник логистической компании", link:"http://artexspb.com/",
            img:imgArtex, role: "Доведение верстки до стандартов фирмы, после фрилансера." },
        {title:"СТЭЛС", desc: "Лендинг производственной компанни", link:"http://spb-stels.ru/",
            img:imgStels, role: "Доведение верстки до стандартов фирмы, после фрилансера." },
        {title:"Icsoba", desc: "Многостраничник международной конференции ", link:"https://icsoba.org/",
            img:imgIcsoba, role: "Доведение верстки до стандартов фирмы, после фрилансера." },
    ]);

    const sliderSlides = slides.map((slide, index) =>(
        <a href={slide.link} target="_blank" rel="noopener noreferrer" className="slide-item" key={index} draggable="false">
            <span className="slide-item__img">
                 <span className="slide-item__img-inner" style={{background: `url("${slide.img}")`}}></span>
            </span>
            <h3>"{slide.title}"</h3>
            <p>{slide.desc}</p>
            <h4>Роль:</h4>
            <p className="role">
                {slide.role}
            </p>
            <span className="slide-item__link">Смотреть сайт <img src={imgArrow} alt="arrow"/></span>
        </a>
    ));

    return(

        <div className="inner">
            <Tag tag="html"/>
            <Tag tag="body"/>
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
                <Slider {...sliderSettings}>
                    {sliderSlides}
                </Slider>
                <Tag tag="div" end/>
            </div>
        </div>

            </div>
            <Tag tag="body" end/>
            <Tag tag="html" end/>

        </div>
    )
};

export default Projects;
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
