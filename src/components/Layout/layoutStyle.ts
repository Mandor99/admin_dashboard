import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';


export const Main = styled('main')(({theme}) => ({
    display: 'flex',
    gap: '1rem',
    [theme.breakpoints.up('xs')]: {
        gap:'3px'
    }
}))

export const Aside = styled(Box)(({theme}) => ({
    width: '250px',
    borderRight: `2px solid ${theme.palette?.bg?.light}`,
    padding: '5px 20px',
    [theme.breakpoints?.up('xs')]: {width:'max-content'},
    [theme.breakpoints?.up('xl')]: {width:'250px'}
}))

export const Section = styled(Box)(({theme}) => ({
    width: '100%',
    padding: '5px 20px',
    overflow:'hidden'
}))