import Link from "next/link";
import Animation from "./animation";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          디자인 하는 개발자
          <br className="hidden lg:inline-block" />
          김동환 입니다.
        </h1>

        <p className="mb-8 leading-relaxed">
          React, TypeScript, Next.js 기반의 신입 프론트엔드 개발자 김동환입니다.
          최소의 코드로 최대의 효율을 내는 기술에 관심이 많습니다. / 웹, 컨텐츠,
          브랜드 디자인 다수 경험 / 디자이너 업무 경험으로 프론트엔드와
          디자이너의 협업에 대한 높은 이해도 / 다수의 프로젝트 경험으로 다양한
          프레임워크와 기술 경험
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <Animation /> */}
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="/neighborkimemoji.png"
        />
      </div>
    </>
  );
}
