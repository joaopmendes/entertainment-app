import './globals.css';
import type { Metadata } from 'next';


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
        {children}
        </body>
        </html>
    );
}
