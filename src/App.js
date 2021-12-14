import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const appName = 'Feisbrut';
  const nav = [
      { link: '/home', label: "Home" },
      { link: '/friends', label: "Friends" },
      { link: '/messages', label: "Messages" }
  ];

  return (
    <div>
      <Header name={appName} links={nav} />
      <Footer />
    </div>
  );
}

export default App;
