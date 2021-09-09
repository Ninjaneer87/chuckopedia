import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import classes from './SeenJokesModal.module.css';
import ee from 'event-emitter';
import SeenJokes from './SeenJokes';

const emitter = new ee();
export const showJokesModal = () => {
    emitter.emit('showJokesModal');
}
export const hideJokesModal = () => {
    emitter.emit('hideJokesModal');
}

const Modal = () => {
    const [show, setShow] = useState(false);
    const modalRef = useRef(null)

    const hide = () => {
        setShow(false);
    };

    useEffect(() => {
        emitter.on('showJokesModal', () => {
            setShow(true);
        });
        
        emitter.on('hideJokesModal', () => {
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
            modalRef.current.scrollTop = 0;
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
                ref={modalRef}
            >
                <SeenJokes />
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
