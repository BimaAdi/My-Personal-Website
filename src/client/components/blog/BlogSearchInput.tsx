"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface FormElements extends HTMLFormControlsCollection {
	search: HTMLInputElement;
}

interface FormInputType extends HTMLFormElement {
	readonly elements: FormElements;
}

const BlogSearchInput = ({ search }: { search: string | null }) => {
	const router = useRouter();

	const onSubmit = (e: FormEvent<FormInputType>) => {
		e.preventDefault();
		const searchForm = e.currentTarget.elements.search;
		if (searchForm.value.trim() !== "") {
			router.push(`/blog?search=${searchForm.value.trim()}`);
			router.refresh();
		}
	};

	return (
		<form onSubmit={onSubmit} className="m-4 flex h-full">
			<input
				id="blogInput"
				className="appearance-none block h-full w-10/12 text-gray border border-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				type="input"
				placeholder="Search"
				name="search"
				defaultValue={search ?? ""}
			/>
			<button
				id="blogSearch"
				type="submit"
				className="bg-gray text-white font-bold ml-2 w-2/12 rounded"
				style={{ height: "45px" }}
			>
				Search
			</button>
		</form>
	);
};

export default BlogSearchInput;
