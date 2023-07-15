import { Dispatch, SetStateAction } from 'react';

export interface ISearchFieldProps {
    value: string;
    onValueChange: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    name: string;
}