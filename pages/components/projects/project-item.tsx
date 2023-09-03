import Image from "next/image";

export default function ProjectItem({data}: any) {

    // 프로젝트 아이템들 추가 (notion 속성 추가 후 json 보고 패스 잡아주면 된다)
    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const description = data.properties.Description.rich_text[0]?.plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url


    return (
        // <div className="flex flex-col p-3 m-3 bg-slate-700 rounded-xl">

        <div className="xl:w-1/4 md:w-1/2 p-4">

            <div className="bg-slate-700 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={imgSrc} alt="content"/>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
                {/*<p className="leading-relaxed text-base">{description}</p>*/}
                <p className="leading-relaxed text-base">여기는 설명 부분입니다.여기는 설명 부분입니다.여기는 설명 부분입니다.여기는 설명 부분입니다.여기는 설명
                    부분입니다.여기는 설명 부분입니다.</p>
                <h1>{title}</h1>
                <a href={github}>깃허브 링크</a>


                {/*<img*/}
                {/*    alt="image"*/}
                {/*    src={imgSrc}*/}
                {/*    style={{ width: "100%", height: "auto" }} // CSS 스타일을 직접 적용*/}
                {/*/>*/}
            </div>
        </div>
    );
}


