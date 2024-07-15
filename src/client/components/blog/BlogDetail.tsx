import styles from "./blog.module.css";

interface BlogDetailProps {
	body: string;
}

const BlogDetail = ({ body }: BlogDetailProps) => {
	return (
		<div className="text-white bg-gray p-2 rounded-md">
			<div
				className={styles.blogDetail}
				dangerouslySetInnerHTML={{ __html: body }}
			></div>
		</div>
	);
};

export default BlogDetail;
