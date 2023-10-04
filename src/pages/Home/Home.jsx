import { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSidenav/LeftSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import Latest from "./Latest";
import HomeNew from "../../components/HomeNew";



const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("news.json")
          .then((res) => res.json())
          .then((data) => setNews(data));
      }, []);
    return (
        <div className="">
            <Header></Header>
            <Latest></Latest>
            <NavBar></NavBar>

            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-0 mx-0 md:mx-20 lg:mx-0 lg:gap-6">
                <div className=" col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" col-span-1 md:col-span-2">
                    {
                        news.slice(18,21).map(homeNews => <HomeNew key={homeNews._id} homeNews={homeNews}></HomeNew> )
                    }
                </div>
                <div className=" col-span-1 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;