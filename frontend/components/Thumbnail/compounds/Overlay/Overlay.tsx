import React from 'react';
import styles from './overlay.module.css';
import Image from 'next/image';


type IOverlayProps = {}

export const Overlay = ({}: IOverlayProps) => {
    return (
        <div id={'thumbnail-overlay relative '}
             className={`${styles.overlay} z-40 transition-all ease-in w-full h-full flex justify-center items-center relative bg-transparent hover:bg-semi-dark-blue/50`}>

            <div
                className={` ${styles.play} w-28 h-12  bg-white/50 rounded-2xl transition-all ease-in`}>
                <Image src={'/icons/icon-play.svg'} className={'mr-3'} alt={'play'} width={30} height={30} />
                <p className={'text-heading-xs text-white'}> Play</p>
            </div>

        </div>
    );
};