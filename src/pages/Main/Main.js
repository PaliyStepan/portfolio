import React, {useEffect, useRef} from "react";
import "./Main.scss"
import Tag from "../../components/Tag/Tag";
import img from "../../assets/img/ava.png"
import {Power2, TweenMax, TimelineLite} from "gsap";


const Main = () => {

    useEffect(()=>{

        const h1End = document.querySelector('.Tag--h1-end');
        const title__desc = document.querySelector('.title__desc');
        const title__markup = document.querySelector('.title__markup');

        const showText = () =>{
            TweenMax.to(title__markup,
                0.8,
                { ease: Power2.easeInOut, opacity: 1,delay: 0.7 },
            );
        }

        const h1EndAnim = ()=> {
            TweenMax.to(h1End,
                0.8,
                { ease: Power2.easeInOut, opacity: 1},
            );
            TweenMax.to(title__desc,
                0.7,
                { ease: Power2.easeInOut, opacity: 1},
            );

            showText();
        };

        TweenMax.staggerFromTo(itemsList.children,
            0.2,
            { ease: Power2.easeInOut, opacity: 0},
            { ease: Power2.easeInOut, opacity: 1},
            0.12,
            h1EndAnim
        );

        const lt = new TimelineLite();
         lt.fromTo(imgAnim,
             1.3,
             { ease: Power2.easeInOut, filter: "blur(10px)"},
             { ease: Power2.easeInOut, filter: "blur(15px)"},
         ).fromTo(imgAnim,
             1.5,
             { ease: Power2.easeInOut, filter: "blur(15px)"},
             { ease: Power2.easeInOut, filter: "blur(0px)"},
         )


    },[]);
    let itemsList = useRef(null);
    let imgAnim = useRef(null);

    return(
        <div className="inner">
            <div className="inner__center">
                <div className="Main page">
                    <div className="title">
                        <Tag tag="h1"/>
                        <h1 ref={el => (itemsList = el)}>
                            <span>С</span>
                            <span>т</span>
                            <span>е</span>
                            <span>п</span>
                            <span>а</span>
                            <span>н</span>
                            <span>&nbsp;</span>
                            <span>П</span>
                            <span>а</span>
                            <span>л</span>
                            <span>и</span>
                            <span>й</span>
                        </h1>
                        <Tag tag="h1" end/>
                    </div>
                    <div className="title__desc">
                        front-end developer
                    </div>
                    <div className="title__markup">
                        / верстальщик
                    </div>
                    <div className="bg-img">
                       <img src={img} alt="я" ref={el => (imgAnim = el)}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;
