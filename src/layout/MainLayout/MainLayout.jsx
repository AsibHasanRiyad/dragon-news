import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className=" font-poppins max-w-6xl md:mx-auto my-10 mx-4">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;