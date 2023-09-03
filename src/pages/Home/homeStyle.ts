import { Box, styled } from "@mui/material"


export const HomeGrid = styled(Box)(({theme}) => ({
    display: 'grid',
    gap: '1rem',
    [theme.breakpoints?.up('xs')]:{
        gridTemplateColumns:'repeat(1, 1fr)',
        gridAutoRows:'minmax(120px, auto)',
    },
    [theme.breakpoints?.up('md')]:{
        gridTemplateColumns:'repeat(2, 1fr)',
        gridAutoFlow:'dense'
    },
    [theme.breakpoints?.up('lg')]:{
        gridTemplateColumns:'repeat(3, 1fr)',
    },
    [theme.breakpoints?.up('xl')]:{
        gridTemplateColumns:'repeat(4, 1fr)',
        gridAutoRows: 'minmax(180px, auto)',
    },
}))

export const Deals = styled(Box)(({theme}) => ({
    gridColumn: 'span 1',
    gridRow: 'span 3',
    border: `2px solid ${theme?.palette?.bg?.light}`,
    borderRadius: '5px'
}))

export const Revenue = styled(Box)(({theme}) => ({
    gridColumn: 'span 2',
    gridRow: 'span 2',
    border: `2px solid ${theme?.palette?.bg?.light}`,
    borderRadius: '5px',
    [theme.breakpoints?.up('xs')]:{
        gridColumn:'span 1'
    },
    [theme.breakpoints?.up('lg')]:{
        gridColumn:'span 3'
    },
    [theme.breakpoints?.up('xl')]:{
        gridColumn:'span 2'
    },
}))

export const Leads = styled(Box)(({theme}) => ({
    gridColumn: 'span 1',
    gridRow: 'span 3',
    border: `2px solid ${theme?.palette?.bg?.light}`,
    borderRadius: '5px'
}))

export const MyBox = styled(Box)(({theme}) => ({
    border: `2px solid ${theme?.palette?.bg?.light}`,
    borderRadius: '5px'
}))
