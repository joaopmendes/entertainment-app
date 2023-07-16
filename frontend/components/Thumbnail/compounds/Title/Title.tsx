import React, { PropsWithChildren } from 'react';
import { ITitleProps } from '@/components/Thumbnail/compounds/Title/types';

export const Title: React.FC<ITitleProps> = ({ title, relative }: PropsWithChildren<ITitleProps>) => {

    const relativeToParentStyles = relative ? 'relative bottom-16 left-2' : '';
    return (
        <h3 id={'thumbnail-title'} className={`${relativeToParentStyles} text-heading-xs text-white pt-2`}>
            {title}
        </h3>
    );
};