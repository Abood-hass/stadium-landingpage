import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './pages/home-page.jsx'
import Header from "./components/header/index.jsx"
import Footer from "./components/footer/index.jsx"
import ContactUs from "./pages/contact-us.jsx"

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}