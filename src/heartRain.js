import React from 'react';
import ReactDOM from 'react-dom';

function randomNumber(start, end) {
    return start + Math.random() * (end - start);
}

class Rain extends React.Component {

    start = [0, 0];
    end = [0, 0];

    init() {
        const { innerWidth, innerHeight } = window;
        const startX = randomNumber(0, innerWidth);
        const startY = -30;
        this.start = [startX, startY];
        const endX = randomNumber(0, innerWidth);
        const endY = innerHeight + 30;
        this.end = [endX, endY];
    }

    componentWillMount() {
        this.init();
    }

    componentDidMount() {
        const { delay } = this.props;
        setTimeout(() => {
            const { end } = this;
            this.dom.style.left = `${end[0]}px`;
            this.dom.style.top = `${end[1]}px`;
        }, delay);
    }

    saveRef = c => this.dom = c;

    render() {
        const { start } = this;
        return <span ref={this.saveRef} className="rain" style={{
            left: start[0],
            top: start[1],
            transition: `all ${randomNumber(3, 3.5)}s`,
            transitionTimingFunction: 'linear',
            fontSize: 20
        }}>
            ❤️
        </span>
    }
}

export default class HeartRain extends React.Component {

    queue = [];

    container = null;

    componentWillMount() {
        this.init();
    }
    
    init() {
        const rainNum = randomNumber(30, 40);
        for (let i = 0; i < rainNum; i++) {
            const delay = randomNumber(i * 200, i * 200 + 1000)
            this.queue.push(<Rain delay={delay}/>);
        }
        const container = document.createElement('div');
        this.container = container;
        document.body.append(container);
    }

    componentDidMount() {
        ReactDOM.render(
            <div>{this.queue}</div>,
            this.container
        );
    }

    render() {
        return null;
    }
}