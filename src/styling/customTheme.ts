import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        mode: 'light',
        bg: {
            main: '#2a3447',
            light: '#384256',
            dark: '#222b3c'
        },
        txt: {
            main: '#fff',
            light: '#ddd',
            dark: '#2a3447'
        },
        background: {
            default: '#2a3447'
        }
    },
    typography: {},
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: {
    //             body: {
    //                 backgroundColor: bg['main']
    //             }
    //         }
    //     }
    // }
})

export default theme;