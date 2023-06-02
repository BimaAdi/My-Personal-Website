import Main from "@/client/layouts/Main"
import BlogDetailComponent from "@/client/components/blog/BlogDetail"
import { getDetailBlogByLinkService } from "@/server/services/blog"


export default async function BlogDetail({ params }:{ params: { slug: string } }) {
    const data =  await getDetailBlogByLinkService({link: params.slug})
    
    return (
        <Main>
            <div style={{ height: "70px" }}></div> {/* navbar buffer */}
                <div className="mx-4 sm:mx-auto max-w-2xl">
                    {data.status === 200 ? <BlogDetailComponent body={data.json.body} />: <></>}
                </div>
            <div style={{ height: "70px" }}></div> {/* footer buffer */}
        </Main>
    )
}