import { paginateBlog } from "@/server/repositories/blog";
import BlogItem from "@/client/components/blog/BlogItem";
import BlogSearchInput from "@/client/components/blog/BlogSearchInput";

export default async function Blog({
	searchParams,
}: { searchParams: { [key: string]: string | string[] | undefined } }) {
	let search = null;
	if (typeof searchParams.search === "string") {
		search = searchParams.search;
	}
	const blogs = paginateBlog({ page: 1, page_size: 5, search });

	return (
		<main className="w-full md:max-w-3xl md:mx-auto">
			<BlogSearchInput search={search} />
			{blogs.data.map((x) => {
				return (
					<BlogItem
						key={x.id}
						title={x.title}
						link={`/blog/${x.link}`}
						tags={x.tags}
						created_at={x.created_at}
					/>
				);
			})}
		</main>
	);
}
