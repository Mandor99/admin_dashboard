import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import { FC } from 'react'
import {IItem, ISidenav, menu} from '../../utilis/data'
import { Link } from 'react-router-dom'


const SideNav:FC = () => {
  return (
    <div>
      {menu?.map(({id, title, listItems}: ISidenav) => (
        <List
        key={id}
      sx={{ width: {xs:'max-content',xl: '100%'}, maxWidth: {xs:'max-content', xl:'250px'}, bgcolor: 'bg.main' }}
      component="nav"
      subheader={
        <ListSubheader component="div" sx={{bgcolor: 'transparent', color: 'txt.light', pr:'0', display:{xs:'none',xl:'block'}}}>
          {title}
        </ListSubheader>
      }
    >
      {listItems?.map((list:IItem) => (
        <Link to={list?.url} key={list?.id} style={{color: 'inherit', textDecoration: 'none'}}>
          <ListItemButton sx={{gap: '1rem'}}>
        <img src={`/imgs/${list?.icon}`} alt={list?.title} />
        <ListItemText primary={list?.title} sx={{display:{xs:'none',xl:'block'}}} />
      </ListItemButton>
        </Link>
      ))}
    </List>
      ))}
    </div>
  )
}

export default SideNav