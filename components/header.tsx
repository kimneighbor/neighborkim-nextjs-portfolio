import Link from "next/link";
import DarkToggleButton from "./dark-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 mr-4 md:mb-0">
              <img src="/neighborkimlogo.png" alt="logo" className="w-12 h-12 "/>
              <span className="ml-3 text-xl">NeighborKim.com</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {/* legacyBehavior를 사용해야 Link 내부에 a 태그 사용 가능 next 9버전 이후 부터는 a 태그 사용 불가 */}
            <Link href="/" legacyBehavior>
              <a className="mr-7 ml-3 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-7 hover:text-gray-900">Projects</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-7 hover:text-gray-900">Posts</a>
            </Link>
            <Link href="/contact-us" legacyBehavior>
            <a className="mr-7 hover:text-gray-900">Contact</a>
            </Link>
          </nav>
         {/* 다크모드 토글 버튼 */}
         <DarkToggleButton />
        </div>
      </header>
    </>
  );
}
