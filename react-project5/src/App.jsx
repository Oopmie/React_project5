import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1/Page1.jsx'
import Page2 from './pages/Page2/Page2.jsx'
import Page3 from './pages/Page3/Page3.jsx'
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Page1 />} />
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/Page3' element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}