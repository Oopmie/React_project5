import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Page1 from './Page1/Page1.jsx'
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}