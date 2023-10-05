import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import EachNews from "../../components/EachNews";
import NewsInsist from "./NewsInsist";

const News = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleNews = data.find((x) => x._id == id);
  console.log(singleNews);

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news)

  return (
    <div>
      <Header></Header>

      <div className=" grid grid-cols-1  lg:grid-cols-4 mx-0 md:mx-20 lg:mx-0 gap-0 lg:gap-8 mt-10 ">
        <div className=" col-span-3">
          <div className=" rounded-md border p-4">
            <figure className=" rounded-none">
              <img
                src={singleNews.image_url}
                alt="News"
              />
            </figure>
            <div className="">
              <h2 className="card-title text-2xl font-bold py-5">{singleNews.title}</h2>
              <p className=" text-sm text-[#706F6F] font-base">{singleNews.details}</p>
              <div className="card-actions justify-start">
                <Link to={'/'}>
                <button className=" px-6 py-2 bg-[#D72050] text-white mt-4 flex justify-center items-center gap-3"> <FaArrowLeft></FaArrowLeft> All news in this category</button>
                 </Link>
              </div>
            </div>
          </div>

          <h1 className=" text-2xl font-bold py-5">Editors Insight</h1>
          <div className=" flex flex-col flex-wrap lg:flex-row gap-3">
            {
                news.slice(1,7).map(eachNews => <NewsInsist eachNews={eachNews} key={eachNews._id}></NewsInsist> )
            }
          </div>
        </div>
        <div className=" col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
