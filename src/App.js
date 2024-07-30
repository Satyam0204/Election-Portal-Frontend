import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState,  } from 'react';
import AuthContext from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function App() {
  let {authToken} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    if(authToken){
      setLoading(false)
      navigate("/dashboard");
    } 
    else{
      setLoading(false);
      navigate("/login");
    }
  },[])
  return (
    <div className="App">
     {loading?<>LOADING ...</>:<></>}
    </div>
  );
}

export default App;
