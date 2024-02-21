import SortTitle from "./SortTitle";

const Curriculum = () => {
  return (
    <div className="">
      <SortTitle>カリキュラムの流れ</SortTitle>
      <p className="md:text-2xl py-2 my-2">
        未経験の方も安心して学習を進められるよう2段階のカリキュラムを用意しています。
      </p>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-3">
        <div className="card  bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">HTML / CSS</h2>
            <p>・顧客の意図を理解した上での自走力</p>
            <p>・WEBサイト/LPの一人称開発</p>
          </div>
        </div>
        <div className="card  bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">HTML / CSS</h2>
            <p>・顧客の意図を理解した上での自走力</p>
            <p>・WEBサイト/LPの一人称開発</p>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">HTML / CSS</h2>
            <p>・顧客の意図を理解した上での自走力</p>
            <p>・WEBサイト/LPの一人称開発</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
