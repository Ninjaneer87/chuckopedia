import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './Notification.module.css';
import ee from 'event-emitter';

const emitter = new ee();
export const notify = (msg, type, cb) => {
    emitter.emit('notification', msg, type, cb);
}

const Icons = {
    Success: <i className="fas fa-check"></i>,
    Danger: <i className="fas fa-times"></i>,
    Info: <i className="fas fa-info"></i>,
}
class Notification extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            hovered: false,
            msg: '',
            type:'', //Success Danger Info
            cb: null
        };
        this.timer = null;
    }

    componentDidMount() {
        emitter.on('notification', (msg, type, cb) => {
            this.onShow(msg);
            this.setState({type, cb});
        });
    }

    onShow = (msg) => {
        if(this.timer) {
            clearTimeout(this.timer);
            this.setState({show: false}, () => {
                this.timer = setTimeout(() => {
                    this.showNotification(msg);
                }, 100);
            })
        } else {
            this.showNotification(msg);
        }
    }

    showNotification = (msg) => {
        this.setState({show:true, msg}, () => {
            this.timer = setTimeout(() => {
                this.setState({show:false})
            }, 4000);
        })
    }

    clicked = () => {
        if(this.state.cb)
        this.state.cb();
        this.setState({show: false});
    }
    
    render() {
        return ReactDOM.createPortal(
            <div 
                onClick={this.clicked}
                className={`${classes.Notification} ${this.state.show ? classes.Show : ''} ${classes[this.state.type]}`}
            >
                {Icons[this.state.type]} {this.state.msg}
            </div>,
        document.getElementById('portal')
        );
    }
}

export default Notification;