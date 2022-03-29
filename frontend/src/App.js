import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Home from "./components/Home";
import "./components/style/style.css";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
