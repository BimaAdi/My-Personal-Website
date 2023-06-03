import Main from "@/client/layouts/Main";
import BlogDetailComponent from "@/client/components/blog/BlogDetail";
import { getDetailBlogByLinkService } from "@/server/services/blog";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDetailBlogByLinkService({ link: params.slug });

  return (
    <Main>
      <div className="w-100">
        <div className="mx-4 sm:mx-auto w-11/12 lg:w-8/12">
          {data.status === 200 ? (
            <BlogDetailComponent body={data.json.body} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Main>
  );
}
