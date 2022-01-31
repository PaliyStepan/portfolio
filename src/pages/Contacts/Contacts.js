import React, {useEffect, useRef} from "react";
import "./Contacts.scss"
import Tag from "../../components/Tag/Tag";
import img from "../../assets/img/phone.png";

// import vk from "../../assets/img/svg/vk.svg";
import tele from "../../assets/img/svg/telegram.svg";
import skype from "../../assets/img/svg/skype.svg";
import mail from "../../assets/img/svg/mail.svg";
import phone from "../../assets/img/svg/phone.svg";
import { Power2, TweenMax,TimelineLite } from "gsap";

const Contacts = () => {
    useEffect(()=>{

        const contactText = document.querySelector('.Contacts__text');
        const h1End = document.querySelector('.Tag--h1-end');
        const contactItems = document.querySelectorAll('.Contacts__item');
        const tagStart = document.querySelector('.Tag--div-start');
        const tagEnd = document.querySelector('.Tag--div-end');

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

        TweenMax.staggerFromTo(contactItems,
            0.8,
            {ease: Power2.easeInOut, opacity: 0, y: 50},
            {ease: Power2.easeInOut, opacity: 1, y: 0},
            0.25,
            divTagsAnim
        );
        TweenMax.fromTo(contactText,
            0.8,
            {ease: Power2.easeInOut, opacity: 0},
            {ease: Power2.easeInOut, opacity: 1},
            0.25
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

    let imgAnim = useRef(null);
    let itemsList = useRef(null);

    return(

        <div className="inner">

            <div className="inner__center">


                <div className="Contacts page">
                    <div className="title">
                        <Tag tag="h1"/>
                        <h1 ref={el => (itemsList = el)}>
                            <span>К</span>
                            <span>о</span>
                            <span>н</span>
                            <span>т</span>
                            <span>а</span>
                            <span>к</span>
                            <span>т</span>
                            <span>ы</span>
                        </h1>
                        <Tag tag="h1" end/>
                    </div>
                    <div className="inner__content">
                        <Tag tag="div"/>
                        <p className="Contacts__text">Связаться со мной можно любым, удобным для Вас способом.</p>
                        <div className="Contacts__grid">
                            <div className="Contacts__row">
                                <div className="Contacts__item">
                                    <a href="tel:89811223048">
                                        <img src={phone} alt=""/>
                                        <span>+7 (981) 122 30 48</span>
                                    </a>
                                </div>
                                <div className="Contacts__item Contacts__item_mail">
                                    <a href="mailto:palstepweb@gmail.com">
                                        <img src={mail} alt=""/>
                                        <span>palstepweb@gmail.com</span>
                                    </a>
                                </div>
                            </div>


                            <div className="Contacts__row">
                                <div className="Contacts__item">
                                    <a href="https://t.me/palstepa">
                                        <img src={tele} alt=""/>
                                        <span>@palstepa</span>
                                    </a>
                                </div>
                                <div className="Contacts__item">
                                    <a href="skype:paliystepan?call">
                                        <img src={skype} alt=""/>
                                        <span>paliystepan</span>
                                    </a>
                                </div>
                            </div>
                            {/*<div className="Contacts__row">*/}
                            {/*    <div className="Contacts__item Contacts__item_vk">*/}
                            {/*        <a href="https://vk.com/paliystepan">*/}
                            {/*            <img src={vk} alt=""/>*/}
                            {/*            <span>vk.com/paliystepan</span>*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <Tag tag="div" end/>
                    </div>
                    <div className="bg-img">
                        <img src={img} alt="конаткты" ref={el => (imgAnim = el)}/>
                    </div>
                </div>


            </div>


        </div>
    )
};

export default Contacts;
