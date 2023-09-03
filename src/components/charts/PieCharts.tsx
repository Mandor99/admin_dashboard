import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { IPieChartBox } from '../../utilis/data'
import { Box, Typography } from '@mui/material'

type Props = {data: IPieChartBox[]}

const PieCharts = ({data}: Props) => {
  return (
    <Box sx={{width:'100%', height:'100%',display:'flex', justifyContent:'space-between', padding:'20px', flexDirection:'column'}}>
        <Typography sx={{flex:'1', textTransform:'capitalize', fontWeight:'bold', fontSize:'2rem'}}>leads by source</Typography>
        <Box sx={{width:'100%', height:'100%', flex:'3'}}>
            <ResponsiveContainer width='99%' height={300}>
            <PieChart>
            <Tooltip contentStyle={{ background: "#fff", borderRadius: "5px" }}/>
        <Pie data={data} innerRadius='70%' outerRadius='90%' fill="#8884d8" paddingAngle={5} dataKey="value">
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
            </ResponsiveContainer>
        </Box>
        <Box sx={{display:'flex', gap:'10px', justifyContent:{xs:'space-between'}}}>
            {data.map((item) => (
                <Box key={Math.random()} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                    <Box className='dot' sx={{width:'10px', height:'10px', borderRadius:'50%', backgroundColor:item.color}}></Box>
                    <Typography className="title">{item.name}</Typography>
                    </Box>
                    <Typography>{item.value}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default PieCharts