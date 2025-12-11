import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    theme: {
        extend: {
            screens: {
                '3xl': '2560px',
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
                unbounded: ['Unbounded', 'sans-serif'],
            },
            colors: {
                primary: {
                    brown: '#695A4D',
                    'brown-dark': '#5F5144',
                },
                black: '#000000',
                'arrow-blue': '#C4CFDE',
            },
            borderRadius: {
                '15': '15px',
                '25': '25px',
            },
            spacing: {
                '15': '15px',
                '20': '20px',
                '30': '30px',
                '40': '40px',
                '60': '60px',
            },
            backgroundImage: {
                'header-gradient':
                    'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 116.43%)',
            },
        },
    },
    content: ['./app/**/*.{vue,js,ts,jsx,tsx}'],
};
