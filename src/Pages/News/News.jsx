import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function News() {
  const data = [
    {
      img: "/ganesh.png",
      title: "Happy Ganesh Chaturthi",
      offer: "Get 10% off",
    },
    {
      img: "pexels1.jpg",
      title: "Festival Special",
      offer: "Flat 15% off",
    },
    {
      img: "/ganesh.png",
      title: "New Arrival",
      offer: "20% Discount",
    },
    {
      img: "pexels1.jpg",
      title: "Limited Time Offer",
      offer: "Buy 1 Get 1 Free",
    },
    {
      img: "/ganesh.png",
      title: "Mega Sale",
      offer: "Up to 50% Off",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="mx-20 space-x-3 m-10">
        <h1 className="text-2xl font-bold text-center mb-7">Updates and new Offers</h1>
      <Slider {...settings}>
        {data.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-2xl shadow-md"
          >
            <img
              src={value.img}
              alt={value.title}
              className="object-cover rounded-xl h-[400px]"
            />
            <div className="text-center">
              <h1 className="text-lg font-semibold">{value.title}</h1>
              <p className="text-gray-600">{value.offer}</p>
              <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
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
