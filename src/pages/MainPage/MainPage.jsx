import Advantages from "../../components/Advantages/Advantages"
import Footer from "../../components/Footer/Footer"
import Form from "../../components/Form/Form"
import Header from "../../components/Header/Header"
import MapSection from "../../components/MapSection/MapSection"
import Navbar from "../../components/Navbar/Navbar"
import Price from "../../components/Price/Price"
import Slider from "../../components/Slider/Slider"

const MainPage = () => {
  return (
    <div className="container">
        <Navbar />
        <Header />
        <Slider />
        <MapSection />
        <Advantages />
        <Price />
        <Form />
        <Footer />
    </div>
  )
}
export default MainPage