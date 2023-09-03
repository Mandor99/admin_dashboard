import { Typography } from '@mui/material'
import {FC} from 'react'
import { MyFooter } from './footerStyle'


const Footer:FC = () => {
  return (
    <MyFooter>
      <Typography variant='h4' sx={{fontWeight:'bold', fontSize: '1rem'}}>MANDO</Typography>
      <Typography variant='h5' sx={{fontSize: '1rem'}}>&copy; Mando Admin Dashboard</Typography>
    </MyFooter>
  )
}

export default Footer