
import '../index.css'
import BrandsSell from "./BrandsSell";
import Cards from "./Cards";
import banner2 from '../assets/hero4.jpg'
import banner3 from '../assets/hero5.jpg'
import banner4 from '../assets/hero6.webp'
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full lg:h-[600px] max-sm:[300px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img
            src={banner3}
            className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img
            src={banner4}
            className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        
      </div>

      {/* <ImageMarquee /> */}
      <BrandsSell></BrandsSell>
      <Cards></Cards>
      <Countdown></Countdown>
      <Subscribe></Subscribe>

    </>
  );
};

export default Home;