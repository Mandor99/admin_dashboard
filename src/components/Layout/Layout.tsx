import { FC } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
import { Main, Section, Aside } from './layoutStyle'
import SideNav from '../SideNav/SideNav'
const Layout:FC = () => {
  return (
    <>
      <Navbar/>
      <Main>
        <Aside>
          <SideNav />
        </Aside>
        <Section>
          <Outlet/>
        </Section>
      </Main>
      <Footer/>
    </>
  )
}

export default Layout