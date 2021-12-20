
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home';
import { useReducer } from 'react';


const INIT_STATE = {
  name: 'Feisbrut',
  nav: [
      { link: './', label: "Home" },
      { link: './friends', label: "Friends" },
      { link: './messages', label: "Messages" }
  ],
  friendsPreview: []
}

const reducer = (state, action) =>
{
  switch(action.type)
  {
    case 'change-name':
      return {...state, name: 'Feisbell'};
    default:
      return state;
  }
}


function App() 
{
  const [state, dispatch] = useReducer(reducer, INIT_STATE); 

  return (
    <div>
      <Header name={state.name} links={state.nav} />

      <button onClick={() => dispatch({ type: 'change-name' })}>
        Rinomina titolo
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<h3>Friends</h3>} />
        <Route path="/messages" element={<h3>Messages</h3>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
