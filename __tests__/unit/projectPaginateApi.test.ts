import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { createMocks } from "node-mocks-http";
import { GET as getPaginateBlogApi } from "@/app/api/project/route";
import { WORKDIR, DEFAULT_JSON_PATH } from "@/shared/constants";

describe("/api/project", () => {
  beforeAll(async () => {
    global.JSON_PATH = `${WORKDIR}/__tests__/data/json/`;
  });

  test("default project", async () => {
    // Given
    const { req } = createMocks({
      url: "http://localhost:3000/api/project",
      method: "GET",
    });

    // When
    let result = await getPaginateBlogApi(req);

    // Expect
    expect(result.status).equal(200);
    let jsonResult = await result.json();
    expect(jsonResult).toMatchObject({
      counts: 1,
      page_count: 1,
      page: 1,
      page_size: 10,
      results: [
        {
          id: "40b09d3a-c62d-4a4e-a84f-19de0f5235c8",
          project_name: "A",
          description: "Desc A",
          repo_link: "https://github.com/BimaAdi/A",
          website_link: "https://A.com/",
          tech_stack: [
            {
              id: "70e0e0fd-c246-49fc-a277-4147c462e48a",
              name: "Next JS",
            },
            {
              id: "173bd653-31eb-4c00-b7c8-67cc03c677da",
              name: "Typescript",
            },
          ],
          created_at: "2023-06-04",
        },
      ],
    });
  });

  afterAll(async () => {
    global.JSON_PATH = DEFAULT_JSON_PATH;
  });
});
