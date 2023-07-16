import React from 'react';
import Image from 'next/image';
import { ThumbnailIconMapper, VideoCategory } from '@/constants/VideoCategory';

type IThumbnailIconProps = {
    type: typeof VideoCategory.MOVIE | typeof VideoCategory.TV_SERIES;
}

export const ThumbnailIcon = ({ type }: IThumbnailIconProps) => {


    const src = ThumbnailIconMapper[type];

    return <Image id={'thumbnail-movie-tv-icon'} src={src} alt={'movie'} height={12}
                  width={12} />;
};