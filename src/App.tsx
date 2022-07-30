import {useState, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './pages/AppRouter';
import {AuthContext} from "./context";
import Menu from './components/NavBar/Menu';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
      if(localStorage.getItem('key')) {
          setIsAuth(true)
      }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
  }}>
      <BrowserRouter>
      <div className="container">
          {isAuth ? <Menu/> : null}
          <AppRouter/>
      </div>
          <Footer/>
      </BrowserRouter>
  </AuthContext.Provider>

  );
}

export default App;
