import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Home } from './Home/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {

  return (
    <ThemeProvider theme={darkTheme}>
       <div className="app">
      <Navbar />
      <Home/>
    </div>
    </ThemeProvider>
   
  )
}

export default App