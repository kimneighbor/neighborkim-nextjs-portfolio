import Image from "next/image";

export default function ProjectItem({data}: any) {

    // 프로젝트 아이템들 추가 (notion 속성 추가 후 json 보고 패스 잡아주면 된다)
    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const description = data.properties.Description.rich_text[0]?.plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select


    return (
        // <div className="flex flex-col p-3 m-3 bg-slate-700 rounded-xl">

        <div className="xl:w-1/4 md:w-1/2 p-3">
            <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg">
                <img className="rounded object-cover object-center mb-6" src={imgSrc} alt="content"/>
                <h3 className="tracking-widest dark:text-blue-400 text-blue-600 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-3">{title}</h2>
                {/*<p className="leading-relaxed text-base">{description}</p>*/}
                <p className="leading-relaxed text-base">{description}</p>
                <a href={github}>깃허브 링크</a>
                <div className="flex items-start mt-2">
                    {tags.map((aTag:any)=>(
                        <h2 className="px-2 py-0.5 mr-2 rounded-md bg-blue-200 dark:bg-blue-600" key={aTag.id}>{aTag.name}</h2>
                    ))}
                </div>


                {/*<img*/}
                {/*    alt="image"*/}
                {/*    src={imgSrc}*/}
                {/*    style={{ width: "100%", height: "auto" }} // CSS 스타일을 직접 적용*/}
                {/*/>*/}
            </div>
        </div>

    );
}


