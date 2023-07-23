import { Dispatch, SetStateAction } from 'react';

type OnValueChange = (value: string) => void;

export interface ISearchFieldProps {
    value: string;
    onValueChange: Dispatch<SetStateAction<string>> | OnValueChange;
    placeholder?: string;
    name: string;
}