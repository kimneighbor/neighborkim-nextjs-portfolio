import Layout from "@/components/layout";
import HEAD from "next/head";
import Link from "next/link";

export default function ContactUs() {
    return (
        <Layout>
            <HEAD>
                <title>NeighborKim.com</title>
                <meta name="description" content="Learn Next.js"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </HEAD>


            <section
                className="flex min-h-[calc(100vh-180px)] flex-col items-center justify-center text-gray-600 body-font">
                <div className="container px-5 min-h-full mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
                    </div>

                    <div className="m-3">
                        <Link href="https://open.kakao.com/o/so5aLeFf"
                              target="_blank">
                            <button
                                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                카카오톡
                            </button>
                        </Link>
                    </div>

                    <div className="m-3">
                        <Link href="mailto:designkimdh@gmail.com"
                              target="_blank">
                            <button
                                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-6  focus:outline-none hover:bg-blue-600 rounded text-lg">
                                E-mail
                            </button>
                        </Link>
                    </div>

                    <div className="m-3">
                        <Link href="tel:010-0000-0000"
                              target="_blank">
                            <button
                                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Phone
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-gray-200 text-center">
                    <p className="leading-normal my-5">Donghwan Kim
                        <br/>Based in Seoul, Korea
                    </p>
                </div>

            </section>

        </Layout>
    );
}
