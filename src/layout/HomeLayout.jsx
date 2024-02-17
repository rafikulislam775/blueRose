import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
