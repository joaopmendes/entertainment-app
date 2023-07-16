import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

type IImageProps = {
    imageUrl: string
    extended: boolean
}

export const VideoImage = ({ imageUrl, extended, children }: PropsWithChildren<IImageProps>) => {

    const imageResponsive = extended
        ? `h-36 tablet:h-56 desktop:h-56 min-h-[140px] tablet:min-w-[230px] desktop:min-w-[230px]`
        : `h-28 tablet:h-36  desktop:h-44 min-h-[110px] tablet:min-h-[140px]  desktop:min-h-[174px]`;
    return (
        <div id={'thumbnail-image-container'}
             className={`relative overflow-hidden ${imageResponsive} rounded-3xl w-full`}>
            {imageUrl && <Image
                fill
                quality={100}
                src={imageUrl}
            />}

            {children}
        </div>
    );
};