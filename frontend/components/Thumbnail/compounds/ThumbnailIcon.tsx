import React from 'react';
import Image from 'next/image';
import { ThumbnailIconMapper } from '@/constants/VideoCategory';

type IThumbnailIconProps = {
    type: string
}

export const ThumbnailIcon = ({ type }: IThumbnailIconProps) => {


    return <Image id={'thumbnail-movie-tv-icon'} src={ThumbnailIconMapper[type]} alt={'movie'} height={12}
                  width={12} />;
};