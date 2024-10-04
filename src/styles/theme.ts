import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryLight: string;
            seconderyLight: string;
            text: string;
            textDark: string
        };
        fonts: {
            main: string;
        };
        fontSizes: {
            small: string;
            medium: string;
            large: string;
        };
    }
}

export const theme: DefaultTheme = {
    colors: {
        primary: 'black',
        primaryLight: 'white',
        seconderyLight: "WhiteSmoke",
        text: 'white',
        textDark: '#202020'
    },
    fonts: {
        main: 'Arial, sans-serif',
    },
    fontSizes: {
        small: '0.5rem',
        medium: '1rem',
        large: '3rem',
    },
};