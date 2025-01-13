// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import './index.css'
import { createRoot } from "react-dom/client"
import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import Footer from "./components/Footer.jsx"
const root = createRoot(document.getElementById("root"))





function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}




root.render(
  <>
    <Page />
  </>

)
