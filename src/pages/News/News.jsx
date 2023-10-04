import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";


const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>

            <div className=" grid grid-cols-1  lg:grid-cols-4 mx-0 md:mx-20 lg:mx-0 ">
                <div className=" col-span-3">
                <h1>News is Coming {id} </h1>
                </div>
                <div className=" col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;