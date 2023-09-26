import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slice/courseSlice";
import HomeLayouts from "../../Layouts/HomeLayouts";
import CourseCard from "../../Components/CourseCard";

function CourseList() {
  const dispatch = useDispatch();

  const { courseData } = useSelector((state) => state.course);

  async function loadCourses() {
    await dispatch(getAllCourses());
  }
  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <HomeLayouts>
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold mb-5">
          Explore the courses made by
        </h1>
        <span className="font-bold text-yellow-500">Industry Experts</span>
        <div className="mb-10 flex flex-wrap gap-14">
          {courseData?.map((element) => {
            return <CourseCard key={element._id} data={element} />;
          })}
        </div>
      </div>
    </HomeLayouts>
  );
}

export default CourseList;
