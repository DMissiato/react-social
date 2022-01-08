
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from './components/CreatePost';

import Home from './pages/Home';
import Friends from './pages/Friends';
import Messages from './pages/Messages';


const INIT_STATE = {
  name: 'Feisbrut',
  nav: [
      { link: './', label: "Home" },
      { link: './new-post', label: "Create Post" },
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
        <Route path="/new-post" element={<CreatePost />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
