
import { Routes, Route } from 'react-router-dom';
import { useReducer, Suspense, lazy } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from './components/CreatePost';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'));
const Friends = lazy(() => import(/* webpackChunkName: "friends" */ './pages/Friends'));
const Messages = lazy(() => import(/* webpackChunkName: "messages" */ './pages/Messages'));


const INIT_STATE = {
  name: 'Feisbrut',
  nav: [
      { link: './react-social/', label: "Home" },
      { link: './react-social/new-post', label: "Create Post" },
      { link: './react-social/friends', label: "Friends" },
      { link: './react-social/messages', label: "Messages" }
  ],
  friendsPreview: []
};

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
          path="/react-social/" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/react-social/new-post" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CreatePost />
            </Suspense>
          } 
        />
        <Route 
          path="/react-social/friends" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Friends />
            </Suspense>
          } 
        />
        <Route 
          path="/react-social/messages" 
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
