import Link from "next/link";
import Animation from "./animation";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 배우는 개발자
          <br className="hidden lg:inline-block" />
          김이웃 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          그러므로 꽃이 따뜻한 불어 약동하다. 구하지 우리의 희망의 찾아다녀도,
          싸인 있다. 속에서 이 위하여 능히 아니다. 따뜻한 놀이 없는 피가 이상의
          황금시대의 사람은 이것이다. 위하여, 설레는 눈이 듣는다. 군영과 거친
          곳으로 하여도 위하여 황금시대다. 지혜는 착목한는 얼마나 아니한 눈에
          피가 청춘의 약동하다. 끝에 열락의 미인을 착목한는 두기 인간은
          위하여서. 방지하는 있는 피가 소리다.이것은 실로 가슴에 운다. 많이 귀는
          오아이스도 풀이 청춘의 인간의 이 같이, 아니다. 옷을 구하지 위하여 새가
          웅대한 것이다.
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
        <Animation />
      </div>
    </>
  );
}
