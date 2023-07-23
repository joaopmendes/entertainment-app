'use client';
import { SearchField } from '@/components/SearchField/SearchField';
import { useRouter } from 'next/navigation';

type ISearchBarProps = {
    initialValue: string;
    placeholder?: string
}

export const SearchBar = ({ initialValue, placeholder }: ISearchBarProps) => {
    const router = useRouter();

    const onChange = (newValue: string) => {

        router.push('?search=' + newValue);
    };
    return (
        <div className={'w-full'}>

            <SearchField value={initialValue} onValueChange={onChange} name={'search'}
                         placeholder={placeholder ?? ''} />

        </div>
    );
};