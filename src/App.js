import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTax from "./components/AddTax";

function App() {

  const appName = 'Feisbrut';
  const nav = [
      { link: './home', label: "Home" },
      { link: './friends', label: "Friends" },
      { link: './messages', label: "Messages" }
  ];

  return (
    <div>
      <Header name={appName} links={nav} />
      <AddTax value={100} tax={22} />
      <Footer />
    </div>
  );
}

export default App;
