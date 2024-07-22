import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "@/client/components/blog/mdx/code";
import styles from "@/client/components/blog/blog.module.css";

// Copy From https://github.com/owolfdev/simple-mdx-blog

// Content for these pages will be fetched with getPost function.
// This function is called at build time.
// It returns the content of the post with the matching slug.
// It also returns the slug itself, which Next.js will use to determine which page to render at build time.
//For example, { props: { slug: "my-first-post", content: "..." } }
async function getPost({ slug }: { slug: string }) {
	const markdownFile = fs.readFileSync(
		path.join("blogs", slug + ".mdx"),
		"utf-8",
	);
	const { data: frontMatter, content } = matter(markdownFile);
	return {
		frontMatter,
		slug,
		content,
	};
}

// generateStaticParams generates static paths for blog posts.
// This function is called at build time.
// It returns an array of possible values for slug.
// For example, [{ params: { slug: "my-first-post" } }, { params: { slug: "my-second-post" } }]
export async function generateStaticParams() {
	const files = fs.readdirSync(path.join("blogs"));
	const params = files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
	// Params contains the post `slug`

	// Fetch the post content based on the slug
	const props = await getPost(params);

	// Customize components for MDX rendering.
	// For example, the Code component will render code blocks with syntax highlighting.
	const components = {
		pre: Code,
	};

	return (
		<div className="py-4 sm:py-6 max-w-3xl mx-auto px-4">
			<article className="prose prose-sm md:prose-base lg:prose-lg mx-auto text-white">
				<h1 className="text-white">{props.frontMatter.title}</h1>
				<div className="flex justify-between">
					<p className="text-white">Created: {props.frontMatter.date}</p>
					<p className="text-white">{props.frontMatter.tags}</p>
				</div>
				<div className={styles.blog}>
					<MDXRemote source={props.content} components={components} />
				</div>
			</article>
		</div>
	);
}
