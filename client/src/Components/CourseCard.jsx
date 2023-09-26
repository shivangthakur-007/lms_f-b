import { useNavigate } from "react-router-dom";

function CourseCard({data}){
    const navigate=useNavigate();

    return (
      <div
        onClick={() => navigate("/course/description/", { state: { ...data } })}
        className="text-white w-[22rem] j-[430] shadow-lg cursor-pointer group overflow-hidden "
      >
        <div className="overflow-hidden">
          <img
            className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out"
            src={data?.thumbnail?.secure_url}
            alt="coursethumbnail"
          />
          <div className="p-3 space-y-1 text-white">
            <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
              {data?.title}
            </h2>
            <p className="line-clamp-2">{data?.description}</p>
            <p className="font-semibold ">
              <span className="text-yellow-500 font-bold ">Category: </span>
              {data?.category}
            </p>
            <p className="font-semibold ">
              <span className="text-yellow-500 font-bold ">
                Total Lecutres:{" "}
              </span>
              {data?.numbersOfLectures}
            </p>
            <p className="font-semibold ">
              <span className="text-yellow-500 font-bold ">Instructor: </span>
              {data?.createdBy}
            </p>
          </div>
        </div>
      </div>
    );
}
export default CourseCard;