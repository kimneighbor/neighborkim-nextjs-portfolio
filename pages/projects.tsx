import Layout from "@/components/layout";
import {TOKEN, DATABASE_ID} from "@/config";
import HEAD from "next/head";
import ProjectItem from "@/components/projects/project-item";
import ProjectModal from "@/components/modal/project-modal";
import {Fragment, useState} from "react";


export default function Projects({projects}: any) {
    const [showProjectModal, setShowProjectModal] = useState(false);

    return (

        <Fragment>
            <Layout>
                <HEAD>
                    <title>Kimdonghwan.com</title>
                    <meta name="description" content="portfolio"></meta>
                    <link rel="icon" href="/favicon.ico"/>
                </HEAD>

                <section className="flex min-h-[calc(100vh-180px)] flex-col items-center justify-center text-gray-600">


                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects / Notion API

                                {/*/ Projects : {projects.results.length}*/}

                                {/*애니메이션 버튼*/}
                                <span className="relative h-5 w-5 mx-3">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-400"></span>
                        </span>
                                {/**모달창 테스트*/}
                                <button onClick={() => setShowProjectModal(true)}><a>modal</a></button>
                            </h1>
                            {/*<div className="h-1 w-20 bg-blue-500 rounded"></div>*/}
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            이 섹션은 노션 API를 연동해서 만들었습니다. 최초 로딩 시 데이터가 호출되고 이후 변동사항은 새로고침 후 적용됩니다.
                            프로젝트 깃허브 주소를 클릭하면 코드를 확인할 수 있습니다. 더 많은 내용을 보고 싶다면 깃허브 주소에서 확인해주세요.

                        </p>

                    </div>


                    <div className="flex flex-wrap -m-4">
                        {/*project-item*/}
                        {/*서브타이틀이 프로젝트인 아이템만 가져온다*/}
                        {projects.results.filter((aProject: any) => aProject.properties.Subtitle.rich_text[0]?.plain_text === "프로젝트").map((aProject: any) => (
                            <ProjectItem key={aProject.id} data={aProject}/>
                        ))}
                    </div>
                </div>

                </section>


            </Layout>
            {/**모달창 테스트*/}
            <ProjectModal isVisible={showProjectModal}
                          onClose={() => setShowProjectModal(false)}
            />
        </Fragment>
    );
}


// 빌드 타임에 호출 (딱 1번)
export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`

        },
        body: JSON.stringify({
            // 정렬 적용
            sorts: [
                {
                    // 날짜별 정렬
                    "property": "WorkPeriod",
                    // 내림차순
                    "direction": "descending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()




    return {
        props: {
            projects
        },
        revalidate: 10, // 페이지가 재생성될 시간 간격(초)
    };

}
