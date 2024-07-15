import { ProjectJsonType } from "../types/project";

export const PaginateProject = ({
	projects,
	page = 1,
	page_size = 10,
}: {
	projects: ProjectJsonType;
	page?: number | undefined;
	page_size?: number | undefined;
}): {
	data: ProjectJsonType;
	num_data: number;
	num_page: number;
} => {
	let num_projects = projects.length;
	let start = (page - 1) * page_size;
	if (start > num_projects) {
		return {
			data: [],
			num_data: num_projects,
			num_page: Math.ceil(num_projects / page_size),
		};
	}
	let end = start + page_size;
	if (end > num_projects) {
		end = num_projects;
	}
	return {
		data: projects.slice(start, end),
		num_data: num_projects,
		num_page: Math.ceil(num_projects / page_size),
	};
};
