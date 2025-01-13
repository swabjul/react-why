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
const root = createRoot(document.getElementById("root"))



function Header() {
  return (
    <img src="src/assets/react.svg" alt="react logo" width="40px" />
  )
}

function Page() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  )
}

function Footer() {
  <small>© 2024 Ziroll development. All rights reserved.</small>
}


root.render(
  <>
    <Header />
    <Page />
    <Footer />
  </>

)
