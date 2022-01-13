
import { Routes, Route } from 'react-router-dom';
import { useReducer, Suspense, lazy } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from './components/CreatePost';

/* import Home from './pages/Home';
import Friends from './pages/Friends';
import Messages from './pages/Messages'; */

const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'));
const Friends = lazy(() => import(/* webpackChunkName: "friends" */ './pages/Friends'));
const Messages = lazy(() => import(/* webpackChunkName: "messages" */ './pages/Messages'));


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
        <Route 
          path="/" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/new-post" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CreatePost />
            </Suspense>
          } 
        />
        <Route 
          path="/friends" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Friends />
            </Suspense>
          } 
        />
        <Route 
          path="/messages" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Messages />
            </Suspense>
          } 
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
