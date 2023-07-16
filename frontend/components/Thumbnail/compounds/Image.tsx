import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

type IImageProps = {
    imageUrl: string
}

export const VideoImage = ({ imageUrl, children }: PropsWithChildren<IImageProps>) => {

    const imageResponsive = `h-28 tablet:h-36  desktop:h-44`;

    return (
        <div id={'thumbnail-image-container'}
             className={`relative w-full overflow-hidden ${imageResponsive} rounded-3xl`}>
            {imageUrl && <Image
                fill
                quality={100}
                src={imageUrl}
            />}

            {children}
        </div>
    );
};