'use client';
import { SearchField } from '@/components/SearchField/SearchField';
import { useRouter } from 'next/navigation';

type ISearchBarProps = {
    initialValue: string;
    placeholder?: string;
    className?: string
}

export const SearchBar = ({ initialValue, placeholder, className }: ISearchBarProps) => {
    const router = useRouter();

    const onChange = (newValue: string) => {
        debugger;
        router.push('?search=' + newValue);
    };
    return (
        <div className={'w-full' + className}>

            <SearchField value={initialValue} onValueChange={onChange} name={'search'}
                         placeholder={placeholder ?? ''} />

        </div>
    );
};