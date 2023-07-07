import { createTheme, responsiveFontSizes } from "@mui/material";


const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#472D30',
        },
        secondary: {
            main: '#E26D5C',
        },
        darkPrimary: {
            main: '#723D46'
        },
        accent: {
            main: '#FFE1A8',
        },
        light: {
            main: '#C9CBA3',
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#1E1E1E',
            secondary: '#F2F2F2',
        },


    },

} as never));


export default theme;