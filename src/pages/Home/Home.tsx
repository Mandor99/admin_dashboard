import React, { FC } from 'react'
import { Deals, HomeGrid, Leads, Revenue, MyBox } from './homeStyle'
import TopDeals from '../../components/TopDeals/TopDeals'
import LineCharts from '../../components/charts/LineCharts'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser,AreaChartProduct, PieChartProduct } from '../../utilis/data'
import BarCharts from '../../components/charts/BarCharts'
import AreaCharts from '../../components/charts/AreaCharts'
import PieCharts from '../../components/charts/PieCharts'


const Home:FC = () => {
  return (
    <HomeGrid>
      <Deals>
        <TopDeals />
      </Deals>
      <MyBox >
        <LineCharts {...chartBoxUser} />
      </MyBox>
      <MyBox >
        <LineCharts {...chartBoxRevenue} />
      </MyBox>
      <Leads >
        <PieCharts data={PieChartProduct} />
      </Leads>
      <MyBox >
        <LineCharts {...chartBoxProduct} />
      </MyBox>
      <MyBox >
        <LineCharts {...chartBoxConversion} />
      </MyBox>
      <Revenue >
        <AreaCharts data={AreaChartProduct} />
      </Revenue>
      <MyBox >
        <BarCharts  {...barChartBoxVisit} />
      </MyBox>
      <MyBox >
        <BarCharts {...barChartBoxRevenue} />
      </MyBox>
    </HomeGrid>
  )
}

export default Home