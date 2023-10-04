import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EachNews from "../../components/EachNews";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
//   console.log(news);
  return (
    <div className=" text-center lg:text-start">
      {/* Categories */}
      <div className=" text-xl">
        <h1 className=" font-semibold mb-2 text-center lg:text-start">All Category </h1>
        <div className="">
          {categories.map((category) => (
            <NavLink
              className="block text-[#9F9F9F] font-medium pl-0 lg:pl-8 py-4 rounded-md hover:bg-[#E7E7E7] hover:text-[#403F3F] "
              to={`/category/${category.id}`}
              key={category.id}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* news */}
      <div className=" space-y-5 mt-4">
        {news.slice(9,13).map((eachNews) => (
          <EachNews eachNews={eachNews} key={eachNews._id}></EachNews>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
