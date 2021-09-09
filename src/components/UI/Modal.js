import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';
import ee from 'event-emitter';

const emitter = new ee();
export const showModal = (content) => {
    emitter.emit('showmodal', content);
}
export const hideModal = () => {
    emitter.emit('hidemodal');
}

const Modal = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(false);

    const hide = () => {
        setShow(false);
        setTimeout(() => {
            setContent(null);
        }, 300);
    };

    useEffect(() => {
        emitter.on('showmodal', (content) => {
            setShow(true);
            setContent(content);
        });
        
        emitter.on('hidemodal', () => {
            hide();
        });
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(show) {
                if(event.keyCode === 27)
                hide();
            }
        }

        if(show) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            if(show) {
                document.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = 'unset';
            }
        }
    }, [show]);

    return ReactDom.createPortal(
        <div>
            <div 
                className={`${classes.Overlay} ${show ? classes.Show : ''}`} 
                onClick={() => hide()} 
            />
            <div 
                className={`${classes.Modal} ${show ? classes.Show : ''}`}
            >
                {content}
            </div>
            <div 
                className={`${classes.CloseButton} ${show ? classes.Show : ''}`} 
                onClick={() => hide()} 
            >
                <i className="far fa-times-circle fa-2x"></i>
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default React.memo(Modal);
