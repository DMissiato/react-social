import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home';

function App() {

  const appName = 'Feisbrut';
  const nav = [
      { link: './', label: "Home" },
      { link: './friends', label: "Friends" },
      { link: './messages', label: "Messages" }
  ];

  return (
    <div>
      <Header name={appName} links={nav} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
