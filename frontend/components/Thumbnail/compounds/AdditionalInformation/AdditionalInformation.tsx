import React, { PropsWithChildren } from 'react';
import { IAdditionalInformationProps } from '@/components/Thumbnail/compounds/AdditionalInformation/types';

export const AdditionalInformation: React.FC<IAdditionalInformationProps> = ({
                                                                                 year,
                                                                                 type,
                                                                                 icon,
                                                                                 rating,

                                                                                 relative,
                                                                             }: PropsWithChildren<IAdditionalInformationProps>) => {
    const relativeToParentStyles = relative ? 'relative bottom-14 left-2' : '';
    return (
        <div id={'thumbnail-additionalinfo'}
             className={`${relativeToParentStyles} flex text-body-s text-white/75 gap-2 pt-1`}>
            <p>
                {year}
            </p>
            &#x25CB;
            <div className={'flex justify-center items-center gap-2'}>
                {icon}
                {type}
            </div>
            &#x25CB;
            <p>
                {rating}
            </p>
        </div>
    );
};

export type AdditionalInformationType = typeof AdditionalInformation;