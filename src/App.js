import React, {useEffect, useState} from 'react';
import Menu from "./components/Menu/Menu";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import ReactBlock from "./pages/React/React";
import Contacts from "./pages/Contacts/Contacts";
import Games from "./pages/Games/Games";
import VueBlock from "./pages/Vue/Vue";
import Tag from "./components/Tag/Tag";

function App() {

    const [app, setApp] = useState(['App']);
    useEffect(()=>{
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setApp(['App', 'App_mobile']);
        }
    },[]);

    return (
        <div className={app.join(" ")}>
			<Menu/>
			<div className="App__wrap">
				<div className="container App__container">
					<Tag tag="html"/>
					<Tag tag="body"/>

					<div className="App__content">
						<Switch >
							<Route path="/about" component={About}></Route>
							<Route path="/skills" exact component={Skills}></Route>
							<Route path="/projects" component={Projects }></Route>
							<Route path="/react" component={ReactBlock }></Route>
							<Route path="/vue" component={VueBlock}></Route>
							<Route path="/contacts"  component={Contacts}></Route>
							<Route path="/games"  component={Games}></Route>
							<Route path="/" exact component={Main}></Route>
							<Redirect to="/"/>
						</Switch>
					</div>
					<Tag tag="body" end/>
					<Tag tag="html" end/>
				</div>
			</div>
		</div>
    );
}

export default App;
