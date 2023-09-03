import { Box, Typography } from '@mui/material'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { IBarChartBox } from '../../utilis/data'


const BarCharts = (props: IBarChartBox) => {
  return (
    <Box sx={{p:'20px', display: 'flex', flexDirection:'column',justifyContent:'space-between'}}>
        <Typography sx={{flex:'1'}}>{props.title}</Typography>
        <Box sx={{width:'100%', height:'100%', flex:'4'}}>
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={props.chartData}>
                    <Bar dataKey={props.dataKey} fill={props.color} />
                    <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px", border:'none' }} labelStyle={{ display: "none" }} cursor={{fill:"none"}}/>
                </BarChart>
            </ResponsiveContainer>
        </Box>
    </Box>
  )
}

export default BarCharts