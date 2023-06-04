import { UnprocessableEntityType, InternalServerErrorType } from "@/shared/schemas/common";
import { PaginateProjectsType, QueryParamsProjectsSchema } from "@/shared/schemas/project";
import { Ok, UnprocessableEntity, InternalServerError } from "@/server/types/status";
import { readProject, readTag } from "@/server/db/query";
import { PaginateProject } from "@/server/repositories/project";
import { getDetailTag } from "@/server/repositories/tag";
import dayjs from "dayjs";

export const getPaginateProjectService = async ({
  page,
  page_size,
}: {
  page: number;
  page_size: number;
}): Promise<Ok<PaginateProjectsType> | UnprocessableEntity<UnprocessableEntityType> | InternalServerError<InternalServerErrorType>> => {
    try {
        // parse and validate query param
        let validateQueryParam = QueryParamsProjectsSchema.safeParse({
            page,
            page_size,
        });
        if (validateQueryParam.success === false) {
            return {
                status: 422,
                json: {
                    message: validateQueryParam.error
                }
            } satisfies UnprocessableEntity<UnprocessableEntityType>;
        }

        // read from "db" ;)
        let projects = readProject();
        let tags = readTag();
        let { data, num_data, num_page } = PaginateProject({
            projects,
            page,
            page_size,
        });

        // format json response
        let responseOk = {
            counts: num_data,
            page_count: num_page,
            page,
            page_size,
            results: data.map((x) => {
                return {
                    id: x.id,
                    project_name: x.project_name,
                    description: x.description,
                    repo_link: x.repo_link,
                    website_link: x.website_link,
                    tech_stack: x.tech_stack.map((y) => {
                        let detail_tag = getDetailTag({ tags, id: y });
                        if (detail_tag === null) {
                            return null
                        }
                        return {
                            id: detail_tag.id,
                            name: detail_tag.name,
                        };
                    }),
                    created_at: dayjs(x.created_at).format("YYYY-MM-DD"),
                };
            })
        } satisfies PaginateProjectsType

        // return response
        return { status: 200, json: responseOk };
    } catch (err) {
        return { status: 500, json: { error: err } } satisfies InternalServerError<InternalServerErrorType>
    }
};
