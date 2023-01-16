import { createTheme } from '@mui/material'

export const PrimaryTheme = createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: '#017dc3',
            contrastText: '#FFF',
            700: '#017dc3'
        },

        background: {
            default: '#e5f0f9',
            paper: '#FFF'
        }
    },

    typography: {
        h4: {
            color: '#3E3E3E',
            fontWeight: 500
        },
        caption: {
            color: '#3E3E3E'
        }
    }
})