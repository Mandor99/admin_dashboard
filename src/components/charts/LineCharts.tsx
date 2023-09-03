import { ILineChartBoxUser } from '../../utilis/data'
import { Avatar, Box, ListItemAvatar, ListItemText, Typography, colors } from '@mui/material'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'


const LineCharts = (props: ILineChartBoxUser) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'/*,gap:'3rem'*/, width: '100%', height: '100%', padding: '20px', flexDirection:{xs:'column', md:'row'}}}>
        <Box sx={{flex: { md:'3'}, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:{xs:'.5rem'}}}>
            <Box sx={{display: 'flex'}}>
            <ListItemAvatar sx={{minWidth: 'max-content'}}>
                <Avatar alt='user avatar' src={`./imgs/${props?.icon}`} sx={{width: '30px', height: '30px', objectFit: 'contain'}} />
              </ListItemAvatar>
              <ListItemText primary={
                <Box sx={{mr: '0rem'}}>
                  <Typography fontSize='.8rem'>{props?.title}</Typography>
                </Box>
              } />
            </Box>
            <Typography variant='h4' sx={{fontSize: {xs:'1.25rem', md:'1.5rem'}, fontWeight:'bold'}}>{props?.number}</Typography>
            <Typography sx={{color: `${props?.color}`}}>View all</Typography>
        </Box>
        <Box sx={{flex: {xs:'1', md:'2'}, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div style={{width:'100%', height:'100%'}}>
          <ResponsiveContainer width={'99%'} height={'100%'}>
        <LineChart data={props?.chartData}>
          <Line type="monotone" dataKey={props?.dataKey} stroke={props?.color} strokeWidth={2} dot={false} />
          <Tooltip contentStyle={{ background: "transparent", border: "none" }} labelStyle={{ display: "none" }} position={{ x: 10, y: 25 }}/>
        </LineChart>
      </ResponsiveContainer>
          </div>
          <div style={{textAlign: 'end'}}>
            <Typography variant='h4' color={props?.percentage > 0 ? colors.lightGreen['A400'] : colors.red[800]} sx={{fontSize:{xs:'1.25rem', md:'1.75rem'}, fontWeight:'bold'}}>{props?.percentage}%</Typography>
            <Typography color='txt.main'>this month</Typography>
          </div>
        </Box>
    </Box>
  )
}

export default LineCharts