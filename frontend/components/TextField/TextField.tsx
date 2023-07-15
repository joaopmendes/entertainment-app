'use client';

import { FocusEventHandler } from 'react';
import { ITextField } from '@/components/TextField/type';
import { useInternalValue } from '@/hooks';


export const TextField: React.FC<ITextField> = ({
                                                    onValueChange,
                                                    value,
                                                    placeholder,
                                                    name,
                                                    type,
                                                    isInvalid,
                                                    errorMessage,
                                                }: ITextField) => {
    const [internalValue, setInternalValue] = useInternalValue<string>(value);

    const onBlur: FocusEventHandler<HTMLInputElement> = e => {
        onValueChange(internalValue ?? '');
    };

    const inputNoValueStyle = !internalValue ? ' text-white/50' : ' text-white';
    const inputInvalidStyle = isInvalid ? 'focus:border-red border-red' : '';
    return (
        <div className={'flex h-9 relative transition-all'}>
            <input name={name}
                   className={
                       `ml-4 pl-4 pb-2 caret-red text-body-s min-w-[230px] w-full
                       border-0 border-b-[1px] border-solid border-greyish-blue focus:border-white
                       ${inputNoValueStyle} ${inputInvalidStyle}`
                   }
                   placeholder={placeholder ?? ''}
                   value={internalValue}
                   onChange={e => setInternalValue(e.target.value)}
                   onBlurCapture={onBlur}
                   type={type}
            />
            {errorMessage && isInvalid &&
                <label className={'text-body-s text-red absolute right-2'}> {errorMessage}</label>}

        </div>
    );
};