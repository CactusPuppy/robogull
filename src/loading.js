import React from "react";
import Main from "./main.js";
import {CSSTransitionGroup} from 'react-transition-group';
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import LoadingAnim from "./loading-san-issara.json";
const loadingAnimOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnim,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default class Loading extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            done: undefined
        };
    }
    render() {
        return (
            <div>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeave={false}>
                    {!this.state.done ? (
                        <div key="LoadWrapper" class="d-flex justify-content-center align-items-center">
                            <h1>Connecting to Twitch...&nbsp;</h1>
                            <Lottie options={loadingAnimOptions} height={120} width={120} />
                        </div>
                    ) : (
                        <Main key="main"/>
                    )}
                </CSSTransitionGroup>
            </div>
        );

    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => this.setState({done: true}));
        }, 3000);
    }
}