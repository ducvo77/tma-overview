import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideShow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 5000,
    autoplay: true,
    centerPadding: "0px",
    arrows: true,
  };
  return (
    <Slider {...settings} className="mb-20 z-[-1]">
      <div className="bg-red-200 w-full">
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558"
          alt=""
          className="w-full"
        />
      </div>
      <div className="bg-red-200 h-[300px]">
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558"
          alt=""
          className="w-full"
        />
      </div>
      <div className="bg-red-200 h-[300px]">
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558"
          alt=""
          className="w-full"
        />
      </div>
      <div className="bg-red-200 h-[300px]">
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558"
          alt=""
          className="w-full"
        />
      </div>
      <div className="bg-red-200 h-[300px]">
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558"
          alt=""
          className="w-full"
        />
      </div>
      <div className="bg-red-200 h-[300px]">
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558"
          alt=""
          className="w-full"
        />
      </div>
    </Slider>
  );
}
