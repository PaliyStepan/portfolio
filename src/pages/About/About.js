import React, {useEffect, useRef} from "react";
import "./About.scss"
import Tag from "../../components/Tag/Tag";
import {Power2, TweenMax} from "gsap";

const About = () => {
    useEffect(()=>{

        const tagStart = document.querySelector('.Tag--div-start');
        const tagEnd = document.querySelector('.Tag--div-end');
        const h1End = document.querySelector('.Tag--h1-end');
        const h1EndAnim = ()=> {
            TweenMax.to(h1End,
                0.6,
                { ease: Power2.easeInOut, opacity: 1},
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
            { ease: Power2.easeInOut, opacity: 0},
            { ease: Power2.easeInOut, opacity: 1},
            0.15,
            h1EndAnim
        );

        TweenMax.staggerTo(contentBlock.children,
            0.6,
            { ease: Power2.easeInOut, opacity: 1 },
            0.3,
            divTagsAnim
    );




    },[]);

    let itemsList = useRef(null);
    let contentBlock = useRef(null);

    return(
            <div className="inner">

                <div className="inner__center">
                    <div className="About page">
                        <div className="title">
                            <Tag tag="h1"/>
                            <h1 ref={el => (itemsList = el)}>
                                <span>О</span>
                                <span>б</span>
                                <span>о</span>
                                <span>&nbsp;</span>
                                <span>м</span>
                                <span>н</span>
                                <span>е</span>
                            </h1>
                            <Tag tag="h1" end/>
                        </div>
                        <div className="inner__content" >
                            <Tag tag="div"/>
                            <div className="About__desc" ref={el => (contentBlock = el)}>
                                <p>
                                    Меня зовут Степан, мне 34 года.
                                    В веб разработке больше 3.5 лет.
                                </p>
                                <p>
                                    Поучаствовал в создании больше 34 проектов.
                                </p>
                                <p>
                                    Нравится верстать, анимировать и реализовывать безумные идеи дизайнеров.
                                </p>
                                <p>Веду активный образ жизни, тренажерка, бассейн, лонгборд, ролики, гитара.</p>
                            </div>
                            <Tag tag="div" end/>
                        </div>
                    </div>

                </div>


            </div>

    )
};

export default About;
