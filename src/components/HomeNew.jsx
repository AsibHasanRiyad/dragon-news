/* eslint-disable react/prop-types */
import { FaBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomeNew = ({ homeNews }) => {
  const { author, title, details, rating, total_view, image_url, _id } = homeNews;
  return (
    <div className=" ">
      <div className="card bg-base-100">
        <div className=" bg-[#F3F3F3] flex justify-between items-center px-4 py-2 rounded">
            {/*  */}
          <div className=" flex gap-3">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={author.img}/>
              </div>
            </div>
            <div>
              <h1 className=" text-base">{author.name}</h1>
              <p className=" text-[#706F6F] text-sm">{author.published_date}</p>
            </div>
          </div>

          {/*  */}
          <div className=" flex gap-2 text-xl text-[#706F6F] ">
                <FaBookmark></FaBookmark>
                <FaShareAlt></FaShareAlt>
          </div>

        {/* title */}
        </div>
        <h1 className=" text-[#403F3F] text-xl font-bold px-4 py-3">{title}</h1>
        <figure className=" px-4">
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {
            details.length > 300 ? <p className=" text-[#706F6F] text-sm">{details.slice(0,300)} <span className=" text-rose-500 font-semibold underline"><Link to={`/news/${_id}`}>Read More...</Link></span> </p> : <p className=" text-[#706F6F] text-sm">{details}</p>
          }
          <hr />
          <div className="card-actions justify-between text-[#706F6F] items-center">
            
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{rating.number} out of 5</p>
                </div>

            <div className=" flex justify-center items-center gap-2"><FaEye></FaEye>  {total_view}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNew;
