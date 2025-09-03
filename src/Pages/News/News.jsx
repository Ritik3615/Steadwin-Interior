import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function News() {
  const data = [
    { img: "/ganesh.png", title: "Happy Ganesh Chaturthi", offer: "Get 10% off" },
    { img: "pexels1.jpg", title: "Festival Special", offer: "Flat 15% off" },
    { img: "/ganesh.png", title: "New Arrival", offer: "20% Discount" },
    { img: "pexels1.jpg", title: "Limited Time Offer", offer: "Buy 1 Get 1 Free" },
    { img: "/ganesh.png", title: "Mega Sale", offer: "Up to 50% Off" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-5 md:mx-20 my-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-7">
        Updates and New Offers
      </h1>

      <Slider {...settings}>
        {data.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-2xl shadow-md mx-2"
          >
            <img
              src={value.img}
              alt={value.title}
              className="object-cover rounded-xl h-[250px] md:h-[400px] w-full"
            />
            <div className="text-center mt-3">
              <h1 className="text-lg md:text-xl font-semibold">{value.title}</h1>
              <p className="text-gray-600">{value.offer}</p>
              <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                View More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default News;
