/* eslint-disable react/prop-types */
const SortTitle = ({ children }) => {
  return (
    <div className="container text-3xl font-semibold border-b-2 md:w-full lg:w-1/4 border-red-700">
      {children}
    </div>
  );
};

export default SortTitle;
