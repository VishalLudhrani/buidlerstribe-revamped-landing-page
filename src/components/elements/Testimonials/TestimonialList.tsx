import Slider from "react-slick";
import { TESTIMONIALS } from "../../../../data";

const TestimonialList: React.FC = () => {
  const CustomPrevArrow = (props: { className?: any; style?: any; onClick?: any; }) => {
    const { className, style, onClick } = props;
    return (
      <i
        className={`${className} bi bi-chevron-compact-left`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }
  const CustomNextArrow = (props: { className?: any; style?: any; onClick?: any; }) => {
    const { className, style, onClick } = props;
    return (
      <i
        className={`${className} bi bi-chevron-compact-right`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };
  return (
    <div className="w-5/6 mx-auto">
      <Slider {...settings}>
        {TESTIMONIALS.map((item, pos) => (
          <div key={pos} className="pt-12 sm:px-8 text-center sm:text-left">
            <div className="flex justify-content items-center">
              <div className="hidden sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.logo} alt={item.reviewer} width="192px" height="auto" />
              </div>
              <div className="text-center sm:text-left sm:ml-8">
                <p className="text-lg">{item.review}</p>
                <a href={item.link} className="mt-4 underline">- {item.reviewer}</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TestimonialList;