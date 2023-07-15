'use client';
import { PageContainer, SearchField, TextField } from '@/components';
import { useState } from 'react';

export default function Home() {
    const [value, setValue] = useState('');

    return (
        <PageContainer className={'p-4'}>
            <SearchField value={value} onValueChange={setValue} name={'searc_fied'}
                         placeholder={'Search For movies or TV series'} />

            <div className={'h-8'}></div>
            <TextField value={value} onValueChange={setValue} name={'searc_fied'}
                       placeholder={'Email address'} type={'password'} isInvalid={value.length < 5}
                       errorMessage={'Cant be empty'} />


            <div></div>
        </PageContainer>
    );
}



