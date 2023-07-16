'use client';

import { FocusEventHandler } from 'react';
import { ISearchFieldProps } from '@/components/SearchField/type';
import Image from 'next/image';
import { useInternalValue } from '@/hooks';


export const SearchField: React.FC<ISearchFieldProps> = ({
                                                             onValueChange,
                                                             value,
                                                             placeholder,
                                                             name,
                                                         }: ISearchFieldProps) => {
    const [internalValue, setInternalValue] = useInternalValue<string>(value);

    const onBlur: FocusEventHandler<HTMLInputElement> = e => {
        onValueChange(internalValue ?? '');
    };

    const inputNoValueStyle = internalValue ? ' text-white' : ' text-white/50';
    return (
        <div className={'flex'}>
            <Image src={'/icons/icon-search.svg'} alt={'Search Icon'}
                   className={'h:6 w:6 tablet:h-8 tablet:w-8 '}
                   width={32}
                   height={32} />
            <input name={name}
                   className={
                       `ml-4 caret-red cursor text-body min-w-56 w-full pb-2 
                       tablet:text-heading-m 
                       border-0 border-b-[1px] border-b-transparent border-solid focus:border-greyish-blue 
                       ${inputNoValueStyle}`
                   }
                   placeholder={placeholder ?? ''}
                   value={internalValue}
                   onChange={e => setInternalValue(e.target.value)}
                   onBlurCapture={onBlur}></input>

        </div>
    );
};