import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import ItemCard from "./components/ItemCard/ItemCard"
import { dataSlider } from "./context/data"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    </>
  )
}

export default App
