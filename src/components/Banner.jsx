import banner from "../assets/Top.jpg";
const Banner = () => {
  return (
    <div className="">
      <div
        className="hero relative min-h-screen  -z-10 "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-gray-500 bg-opacity-65 "></div>
        <div className="absolute bottom-0 left-0 text-white px-10 py-12 text-xl md:text-5xl font-extrabold">
          個性を破天荒に活かす、
          <br /> 全く新しいスタイル
        </div>
      </div>
    </div>
  );
};

export default Banner;
