'use client';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { IBookmarkProps } from '@/components/Thumbnail/compounds/Bookmark/types';
import Image from 'next/image';

export const Bookmark: React.FC<IBookmarkProps> = ({ active, onClick }: PropsWithChildren<IBookmarkProps>) => {
    const [imageUrl, setImageUrl] = useState('/icons/icon-bookmark-empty.svg');

    // This is needed because <Image /> component doesn't re-render with dynamic changed src's
    useEffect(() => {
        setImageUrl(active ? '/icons/icon-bookmark-full.svg' : '/icons/icon-bookmark-empty.svg');
    }, [active]);

    return (
        <div
            id={'thumbnail-bookmark'}
            onClick={onClick}
            className={'flex z-50 justify-center items-center absolute top-2 right-2 tablet:top-4 tablet:right-4 h-8 w-8 rounded-full bg-greyish-blue transition-colors ease-in hover:bg-semi-dark-blue'}>
            <Image src={imageUrl} alt={'bookmark'}
                   width={12} height={14}
                   className={'z-10'} />
        </div>
    );
};