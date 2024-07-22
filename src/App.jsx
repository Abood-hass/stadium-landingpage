import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/home-page'
import Header from "./components/header/index.jsx"
import Footer from "./components/footer/index.jsx"
import ContactUs from "./pages/contact-us/index.jsx"
import React, { useEffect } from "react"
import LoadingScreen from "./pages/loading-screen"

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
    console.log("loaded");
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
  }, [])

  return (
    // isLoading ?
    //   (<LoadingScreen />) :
      (
        <div style={{ marginTop: "50px" }}>
          <Router>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="contact-us" element={<ContactUs />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )
  )
}