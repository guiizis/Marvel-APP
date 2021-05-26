import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/header';
import { GlobalStyle } from './style/globalStyle';
import { Routes } from './routes'


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
