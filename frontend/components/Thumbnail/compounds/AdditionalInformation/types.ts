import { ReactElement } from 'react';

export type IAdditionalInformationProps = {
    year: number;
    type: string;
    icon: ReactElement
    rating: string;
    relative?: boolean
}
