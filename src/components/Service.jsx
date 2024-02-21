import Title from "../share/Title";
import TitleServices from "../share/TitleServices";
import { FaCode } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaHandshake } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import Curriculum from "../share/Curriculum";
const Service = () => {
  return (
    <div className="mt-28">
      <Title>事業内容</Title>
      <div className="w-5/6 mx-auto">
        <section className="">
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <TitleServices>エンジニア育成のアカデミー事業</TitleServices>

                <p className="mt-6 mb-4 w-full text-lg sm:mb-12">
                  全くの未経験からWEBエンジニアを目指せる環境を提供しています。フロントエンド・バックエンドの両方を学べるカリキュラムがあり
                  、リアルの開発現場で活躍できるWEBエンジニアに特化した育成しています。
                  リアルの開発現場で活躍できるWEBエンジニアに特化した育成しています。
                </p>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="https://www.bluerose-co.jp/img/Service_Education.jpeg"
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row-reverse lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <TitleServices>SES事業</TitleServices>

                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  自社で育成したWEBエンジニアを大手金融機関やメガベンチャーなど多くの全国の企業様へアサインしております。
                  <br className="hidden md:inline lg:hidden" />
                  高い技術力と幅広いスキルにより、設計・構築・テストに至るまで幅広い業務を承っております。
                </p>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="https://www.bluerose-co.jp/img/Service_SES.jpg"
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <TitleServices>人材コンサル・人材紹介</TitleServices>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  事業戦略や人材育成、採用・営業代行など、クライアント様の方針に合わせて幅広い領域の課題解決をお手伝いしております。
                  <br className="hidden md:inline lg:hidden" />
                  「継続的に成果の出せる組織作り」をクライアント様と一緒に行うことを大切にしております。
                </p>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="https://www.bluerose-co.jp/img/ServiceConsulting.jpg"
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </section>

        {/* カリキュラム*/}

        <section className="py-8 dark:bg-gray-800 dark:text-gray-100">
          <div className=" ">
            <div className="text-center md:text-left md:px-8   md:mr-auto  md:w-2/4  ">
              <TitleServices>カリキュラム</TitleServices>

              <p className="my-4">
                未経験からWEBエンジニアを目指せるよう幅広いカリキュラムと成長を実感できる充実した環境をご用意しています。プログラミング学習や今後のキャリアなど、個々人に合わせたサポート体制を実現することで、
                安心して学べる環境と仲間と切磋琢磨して頑張れる環境の両面が整っています。
              </p>
            </div>
            <div className="grid grid-cols-5 p-4 md:p-8">
              <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <FaCode className="text-4xl"></FaCode>

                  <h5 className="text-xl border-t-2 w-full font-semibold">
                    幅広いカリキュラム
                  </h5>
                  <p>
                    フロントエンド・バックエンドの両方を学ぶカリキュラムなので、現場で活躍できるWEBエンジニアとして、
                    始めから選択肢をどちらかに絞らず複数の可能性を保ったままWEBエンジニアを目指せます。
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <RxAvatar className="text-4xl"></RxAvatar>
                  <h5 className="text-xl border-t-2 w-full font-semibold">
                    充実のサポート体制
                  </h5>
                  <p>
                    講師だけでなく専任のメンターによるサポート体制にも力を入れており、プログラミング学習や今後のキャリアプランなど幅広く相談することができます。
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <LiaLaptopCodeSolid className="text-4xl"></LiaLaptopCodeSolid>
                  <h5 className="text-xl border-t-2 w-full font-semibold">
                    徹底した現場主義
                  </h5>
                  <p>
                    GitHubやBacklogなどリアルの開発現場で使用されるツールを実際のWEBエンジニアの仕事現場と同様の実践環境を用いて本格的な環境を感じながらカリキュラムを進めることができます。
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <FaHandshake className="text-4xl"></FaHandshake>
                  <h5 className="text-xl border-t-2 w-full font-semibold">
                    同じ環境のメンバーと頑張れる
                  </h5>
                  <p>
                    未経験エンジニアを中心に採用強化をしておりますので、技術力の近いメンバーと切磋琢磨できる環境です。同期メンバーが多い環境で学ぶことは成長スピードに圧倒的な違いが出る成長には欠かせない環境です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* カリキュラムの流れ */}
        <Curriculum></Curriculum>
      </div>
    </div>
  );
};

export default Service;
