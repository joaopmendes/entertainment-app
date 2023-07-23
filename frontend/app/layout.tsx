import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
    title: 'Entertainment App',
    description: 'Find movies and series',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
        <body className={'w-screen h-screen bg-dark-blue'}>
        <Navbar>
            {children}
        </Navbar>


        <link
            rel='stylesheet'
            type='text/css'
            charSet='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        </body>
        </html>
    );
}
