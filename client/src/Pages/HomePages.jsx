import { Link } from "react-router-dom"
import HomeLayouts from "../Layouts/HomeLayouts"
import homePage from '../assets/Images/homePageMainImage.png'

function HomePage(){
    return (
        <>
        <HomeLayouts >
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-[2.8rem] font-semibold ">
                        Find Out best  
                        <span className="text-yellow-500 font-bold">
                        Online Courses
                        </span>
                    </h1>
                        <p className="text-xl text-gray-200">
                            We have a large library courses taught by highly skilled faculities at PwSkills.
                        </p>
                        {/* <button className="rounded-full p-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                            Save changes
                        </button> */}
                        <div className="space-x-6">
                            <Link to="/courses">
                                <button className="bg-yellow-500 px-5 py-3 rounded-lg font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                    Explore Courses 
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="border border-yellow-500  px-5 py-3 rounded-lg font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={homePage} alt="homepage image" />
                </div>
            </div>
        </HomeLayouts>
        </>
    )
}

export default HomePage