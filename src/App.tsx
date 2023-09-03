import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styling/customTheme';
import Users from './pages/User/Users';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
      </Route>
    )
  );
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
