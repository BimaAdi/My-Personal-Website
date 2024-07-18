import Link from "next/link";

type Props = {
	title: string;
	link: string;
	tags: string[];
	created_at: Date;
};

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const BlogItem = ({ title, link, tags, created_at }: Props) => {
	return (
		<div className="m-4 rounded-md bg-gray text-white">
			<h2 className="px-8 pt-2 pb-1 text-2xl font-bold hover:underline hover:cursor-pointer">
				<Link href={link}>{title}</Link>
			</h2>
			<div className="flex w-full justify-between items-center pt-1 pb-2">
				<p className="px-8 text-xs">{tags.map((x) => `#${x}`).join(" ")}</p>
				<p className="px-8 text-xs">
					{created_at.getDay()} {monthNames[created_at.getMonth()]}{" "}
					{created_at.getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default BlogItem;
