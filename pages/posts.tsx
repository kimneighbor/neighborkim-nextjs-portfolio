import Layout from "@/components/layout";
import HEAD from "next/head";


export default function Projects({projects}: any) {
    // console.log(projectsNames)
    return (
        <Layout>
            <HEAD>
                <title>NeighborKim.com</title>
                <meta name="description" content="Learn Next.js"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </HEAD>


            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">페이지 준비중
                            {/*/ Projects : {projects.results.length}*/}
                        </h1>
                        <div className="h-1 w-20 bg-blue-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        섹션 준비중입니다.
                    </p>
                </div>


                <div className="flex flex-wrap -m-4">

                </div>

            </div>

        </Layout>
    );
}

