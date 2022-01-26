import React, {useEffect, useRef} from "react";
import "./Skills.scss"
import Tag from "../../components/Tag/Tag";
import {Power2, TweenMax} from "gsap";

const Skills = () => {



    useEffect(()=> {


        const tagStart = document.querySelector('.Tag__div_start');
        const tagEnd = document.querySelector('.Tag__div_end');
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

        TweenMax.staggerFromTo(contentBlock.children,
            0.5,
            {ease: Power2.easeInOut, opacity: 0, scale: 0.3},
            {ease: Power2.easeInOut, opacity: 1, scale: 1},
            0.2,
            divTagsAnim
        );

    },[]);

    let itemsList = useRef(null);
    let contentBlock = useRef(null);


    return(
        <div className="inner">
            <Tag tag="html"/>
            <Tag tag="body"/>
            <div className="inner__center">

                <div className="Skills page">
                    <div className="title">
                        <Tag tag="h1"/>
                        <h1 ref={el => (itemsList = el)}>
                            <span>Н</span>
                            <span>а</span>
                            <span>в</span>
                            <span>ы</span>
                            <span>к</span>
                            <span>и</span>
                        </h1>
                        <Tag tag="h1" end/>
                    </div>

                    <div className="inner__content">
                        <Tag tag="div"/>
                        <div className="skills-list" ref={el => (contentBlock = el)}>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    HTML 5 <br/> CSS 3
                                </div>
                                <div className="skill-item__hidden">
                                    Уверенные знания HTML5 и CSS3
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    JavaScript <br/> jQuery <br/> ES6
                                </div>
                                <div className="skill-item__hidden">
                                    Уверенные знания JavaScript и jQuery. (Работа с DOM-элементами, подключение и
                                    кастомизация плагинов
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    React
                                </div>
                                <div className="skill-item__hidden">
                                    Знание основ реакта. Понимание компонентного подхода. Redux.
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    SASS/SCSS
                                </div>
                                <div className="skill-item__hidden">
                                    Использование препроцессоров SASS/SCSS
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    Photoshop <br/> Figma <br/> Adobe XD
                                </div>
                                <div className="skill-item__hidden">
                                    Владение Photoshop,Figma, Avocode, Adobe XD на уровне нарезки макетов
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    Bootstrap <br/> FlexBox <br/> Grid
                                </div>
                                <div className="skill-item__hidden">
                                    Адпативная, кроссбраузерная и семантическая верстка как с css библиотеками, так и без них
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    PHP
                                </div>
                                <div className="skill-item__hidden">
                                    Знание PHP на уровне понимания работы БД
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    GIT
                                </div>
                                <div className="skill-item__hidden">
                                    Умение работать с системой контроля версий Git (консоль/webstorm)
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    Webpack <br/> GULP
                                </div>
                                <div className="skill-item__hidden">
                                    Использую в работе как и Webpack, так и GULP
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    БЭМ
                                </div>
                                <div className="skill-item__hidden">
                                    Использование БЭМ нейминга.
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    Pixel perfect
                                </div>
                                <div className="skill-item__hidden">
                                    Умение и желание верстать Pixel perfect
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-item__visible">
                                    SVG
                                </div>
                                <div className="skill-item__hidden">
                                    Работа с SVG-графикой
                                </div>
                            </div>
                        </div>
                        <Tag tag="div" end/>
                    </div>
                </div>

            </div>
            <Tag tag="body" end/>
            <Tag tag="html" end/>

        </div>
    )
};

export default Skills;
