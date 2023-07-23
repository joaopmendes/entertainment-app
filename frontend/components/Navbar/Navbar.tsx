'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarLinks } from '@/constants/NavbarLinks';


export const Navbar: React.FC<React.PropsWithChildren> = (props) => {
    const path = usePathname();

    return (
        <React.Fragment>
            <header className={'w-full'}>
                <div
                    className={'flex justify-between bg-semi-dark-blue py-4 px-8 desktop:fixed desktop:left-5 desktop:flex-col desktop:h-[97%] desktop:top-3 desktop:w-24 desktop:items-center desktop:justify-start desktop:gap-24 desktop:rounded-2xl '}>
                    <Image width={32} height={25} src={'/logo.svg'} alt={'page-logo'} className={'desktop:mt-4'} />

                    <div className={'flex gap-6 desktop:gap-12 items-center justify-center desktop:flex-col '}>

                        {
                            NavbarLinks.map(link => (
                                <Link href={link.path} key={link.path}>
                                    <Image width={20} height={20} src={path == link.path ? link.imgActive : link.img}
                                           alt={link.alt} />
                                </Link>
                            ))
                        }

                    </div>

                    <div className={'desktop:mt-auto desktop:mb-2'}>
                        <Image width={32} height={32} src={'/image-avatar.png'} alt={'user-image'} />
                    </div>
                </div>
            </header>
            <div className={'mx-8 desktop:ml-40 desktop:mt-10'}>
                <main className={'w-full h-full'}>
                    {props.children}
                </main>
            </div>
        </React.Fragment>
    );
};
