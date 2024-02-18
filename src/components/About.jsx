import SortTitle from "../share/SortTitle";
import Title from "../share/Title";
import aboutImg from "../assets/About_MVV.jpg";
const About = () => {
  return (
    <div className="" id="about">
      <Title>会社概要</Title>
      <div>
        <h2 className="text-center p-8 text-xl md:text-3xl font-bold">
          自然界に存在しない青いバラのように、
          <br /> 常識にとらわれず、
          <br /> 不可能を可能にする社会を目指す。
        </h2>
      </div>
      <div className="bg-gray-100 text-black pt-10">
        <div className=" w-3/4 mx-auto ">
          <SortTitle>Mission</SortTitle>
          <h2 className="  py-5 text-xl md:text-3xl ">
            ダイバーシティ＆インクルージョン
          </h2>
          <h4 className="">
            人材の個性・多様性を認め、受け入れて活かします。
            <br />
            同じゴールを仲間と目指せる充実した環境提供。
            <br />
            そこにおいて、年齢・性別・国籍は関係ありません。
          </h4>
        </div>
        <div>
          <div className="flex flex-col md:flex-row  relative -bottom-28  md:-bottom-40 ">
            <img
              className="w-2/4 mx-auto md:w-2/4  relative md:-right-40 "
              src={aboutImg}
              alt="about"
            />
          </div>
          <div className=" flex bg-white md:w-3/4  md:ml-auto h-screen my-auto justify-center items-center">
            <div className=" w-3/4 mx-auto ">
              <SortTitle>Vision</SortTitle>
              <h2 className=" py-5 text-xl md:text-3xl">
                好きな時間に好きな場所で好きな人と仕事をする
              </h2>
              <h4>
                現在の社会では、技術スキルと人間力を高めると、お金、場所、時間に縛られず自由な選択肢を持つことができます。そのような選択肢を持てる人材育成に本気で向き合い取り組みます。
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
