/* eslint-disable react/prop-types */
const Title = ({ children }) => {
  return (
    <div className="container min-w-full relative text-wrap p-10 text-center bg-gray-500 text-white opacity-95 z-0">
      <h1 className="title text-4xl sm:text-5xl md:text-6xl inline-block relative p-2 font-bold">
        {children}
      </h1>
      <h1 className="absolute text-xl sm:text-3xl md:text-4xl lg:text-6xl bottom-[40%] lg:bottom-[30%] left-40 md:left-60 right-0 transform -translate-y-full opacity-20 font-extrabold">
        {children === "会社概要"
          ? "About"
          : children === "Abou"
          ? "サービス"
          : children === "Contact Us"
          ? "お問い合わせ"
          : children}
      </h1>
    </div>
  );
};

export default Title;
