import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className=" flex p-3 bg-[#F3F3F3] text-lg font-medium my-6">
        <button className=" px-5 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true} className=" cursor-pointer">
      <p className=" mx-5">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as.....</p>
      <p className=" mx-5">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as.....</p>
      <p className=" mx-5">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as.....</p>
      </Marquee>
    </div>
  );
};

export default Latest;
