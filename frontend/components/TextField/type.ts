import { Dispatch, SetStateAction } from 'react';

export interface ITextFieldProps {
    value: string;
    onValueChange: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    name: string;
    type?: string;
    isInvalid?: boolean;
    errorMessage?: string;
}