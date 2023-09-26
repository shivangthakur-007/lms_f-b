import CarouselSlide from "../Components/Carousel";
import { Celebrities } from "../Constants/CelebrityData";
import HomeLayouts from "../Layouts/HomeLayouts";
import AboutMainImage from "../assets/Images/aboutMainImage.png";

function AboutUs() {
  return (
    <HomeLayouts>
      <div className="pl-20 pt-20 flex  flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education.
            </h1>
            <p className="text-xl text-gray-200">
              Our Goal is to provide the Affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              student to share their skills, creativity and knowledge to each
              other to empower in the growth and wellness of mankind.
            </p>
          </section>

          <div className="w-1/2">
            <img id="test1" style={{filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"}} className="drop-shadow-2xl"
              src={AboutMainImage}
              alt=""
            />
          </div>
        </div>

        <div className="carousel w-1/2 m-auto my-16">
          {Celebrities &&
            Celebrities.map((Celebrities) => (
              <CarouselSlide
                {...Celebrities}
                key={Celebrities.slidenumber}
                totalSlides={Celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayouts>
  );
}

export default AboutUs;
