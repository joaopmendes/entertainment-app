import { useEffect, useState } from 'react';
import { IUseIntervalValue } from './types';

export const useInternalValue = <T>(value: T): IUseIntervalValue<T> => {
    const [internalValue, setInternalValue] = useState<T>(value);

    useEffect(() => {
        if (value !== internalValue) {
            setInternalValue(value);
        }
    }, [value]);

    return [
        internalValue,
        setInternalValue,
    ];
};