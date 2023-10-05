/* eslint-disable react/prop-types */
import { FaCalendarDays } from "react-icons/fa6";
const NewsInsist = ({ eachNews }) => {
  const {image_url, title,author} = eachNews
  return (
    <div>
      <div className="card w-full lg:w-[200px] bg-base-100 rounded-md">
        <figure>
          <img
            src={image_url}
            alt="News"
          />
        </figure>
        <div className="">
          <h2 className="card-title text-[#403F3F] text-xl font-medium ">
            {
                title.slice(0,24)
            }
          </h2>
          <div className="card-actions justify-between mt-4">
            <div className="text-base text-[#9F9F9F] flex justify-center items-center gap-2">
                <FaCalendarDays></FaCalendarDays>
                {
                author.published_date.slice(0,10)
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInsist;