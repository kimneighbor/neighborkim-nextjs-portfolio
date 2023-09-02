import Image from "next/image";

export default function ProjectItem({data}:any){

    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const description = data.properties.Description.rich_text[0]?.plain_text
    const imgSrc:any = data.cover.external.url


    return(
        <div className="p-6 m-3 bg-slate-700 rounded-md">

            <Image
                src={imgSrc}
                width="100%"
                height="60%"

            />
            <h1>{title}</h1>
            <h3>{description}</h3>
            <a href={github}>깃허브 링크</a>
        </div>
    )
}