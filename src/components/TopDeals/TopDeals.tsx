import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Typography } from '@mui/material';
import React, { FC } from 'react'
import {ITopDeals, topDealUsers} from '../../utilis/data'

const TopDeals:FC = () => {
  return (
    <Box py='8px'>
        <List dense sx={{ width: '100%', maxWidth: {xs:'100%', lg:360}, bgcolor: 'bg.main' }} subheader={<ListSubheader sx={{fontWeight: 'bold', fontSize: '2rem', bgcolor:'bg.main', color: 'txt.main'}}>Top Deals</ListSubheader>}>
      {topDealUsers.map(({id, img, username, email, amount}: ITopDeals) => {
        return (
          <ListItem
            key={id}
            // sx={{pr: '7rem'}}
            secondaryAction={
              <div>{amount} $</div>
            }
            disablePadding
          >
            <ListItemButton sx={{pl: '16px', gap: '.7rem'}}>
              <ListItemAvatar sx={{minWidth: 'max-content'}}>
                <Avatar alt='user avatar' src={`${img}`} sx={{borderRadius:'50%', width: '30px', height: '30px', border: '1px solid #fff', objectFit: 'contain'}} />
              </ListItemAvatar>
              <ListItemText primary={
                <Box sx={{mr: '0rem'}}>
                    <Typography fontSize='.8rem'>{username}</Typography>
                    <Typography fontSize='.7rem'>{email}</Typography>
                </Box>
              } />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </Box>
  )
}

export default TopDeals