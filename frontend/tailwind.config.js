/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
        screens: {
            tablet: '758px',
            desktop: '1440px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            red: '#FC4747',
            'dark-blue': '#10141E',
            'greyish-blue': '#5A698F',
            'semi-dark-blue': '#161D2F',
        },
        fontSize: {
            'heading-l': ['32px', { lineHeight: '40.3px', letterSpacing: '-0.5px', fontWeight: '300' }],
            'heading-m': ['24px', { lineHeight: '30.2px', letterSpacing: '0px', fontWeight: '300' }],
            'heading-s': ['24px', { lineHeight: '30.2px', letterSpacing: '0px', fontWeight: '400' }],
            'heading-xs': ['18px', { lineHeight: '22.7px', letterSpacing: '0px', fontWeight: '400' }],
            'body': ['15px', { lineHeight: '18.9px', letterSpacing: '0px', fontWeight: '300' }],
            'body-s': ['13px', { lineHeight: '16.4px', letterSpacing: '0px', fontWeight: '300' }],
        },
    },
    plugins: [],
};
