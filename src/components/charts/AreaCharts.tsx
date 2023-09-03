import { Box, Typography } from '@mui/material'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IAreaCartBox } from '../../utilis/data'

type Props = {data:IAreaCartBox[]}
const AreaCharts = ({data}:Props) => {
  return (
    <Box sx={{p:'20px', display: 'flex', flexDirection:'column',justifyContent:'space-between'}}>
        <Typography sx={{flex:'1', textTransform:'capitalize', fontWeight:'bold', fontSize:'2rem'}}>revenue analytics</Typography>
        <Box sx={{width:'100%', height:'100%', flex:'3'}}>
        <ResponsiveContainer width="99%" height={400} minHeight={300} maxHeight={400}>
        <AreaChart data={data} margin={{top: 10,right: 30,left: 0,bottom: 0}}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="electronic" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </Box>
    </Box>
  )
}

export default AreaCharts