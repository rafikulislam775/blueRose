import SortTitle from "../share/SortTitle";
import Title from "../share/Title";
import aboutImg from "../assets/About_MVV.jpg";
const About = () => {
  return (
    <section className="" id="about">
      <Title>会社概要</Title>
      <div>
        <p className="text-center p-8 text-xl md:text-3xl font-bold">
          自然界に存在しない青いバラのように、
          <br /> 常識にとらわれず、
          <br /> 不可能を可能にする社会を目指す。
        </p>
      </div>
      <div className="bg-gray-100 text-black ">
        <div className=" w-3/4 mx-auto relative -bottom-16  ">
          <SortTitle>Mission</SortTitle>
          <h2 className="  py-5 text-xl md:text-3xl ">
            ダイバーシティ＆インクルージョン
          </h2>
          <p>
            人材の個性・多様性を認め、受け入れて活かします。
            <br />
            同じゴールを仲間と目指せる充実した環境提供。
            <br />
            そこにおいて、年齢・性別・国籍は関係ありません。
          </p>
        </div>
        <div className="md:relative md:-bottom-16">
          <div className="flex flex-col md:flex-row  relative -bottom-28  md:-bottom-40 ">
            <img
              className="w-2/4 mx-auto md:w-2/4  relative md:-right-40 "
              src={aboutImg}
              alt="会社概要"
            />
          </div>
          <div className="   flex bg-white md:w-3/4  md:ml-auto h-screen my-auto justify-center items-center">
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
        <div className=" bg-gray-300 md:w-3/4 py-10">
          <div className="w-3/4  mx-auto  ">
            <SortTitle>Vision</SortTitle>
            <h2 className="py-5 text-xl md:text-3xl">
              人間性・コミ力・人物重視(IQ&lt;EQ)
            </h2>

            <p>
              現在は技術だけなら学べる環境は数多くあります。
              ただ、人間力が低いと社会で価値ある需要の多い人材にはなりません。
              やる気と思いと覚悟のある人材を圧倒的なスピード感をもって育成・輩出していきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
