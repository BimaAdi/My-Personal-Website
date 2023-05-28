import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { createMocks } from "node-mocks-http";
import { GET as getPaginateBlogApi } from "@/app/api/blog/route";
import { WORKDIR, DEFAULT_JSON_PATH } from "@/shared/constants";

describe("/api/blog", () => {
  beforeAll(async () => {
    global.JSON_PATH = `${WORKDIR}/__tests__/data/`;
  });

  test("default blog", async () => {
    // Given
    const { req } = createMocks({
      url: "http://localhost:3000/api/blog",
      method: "GET",
    });

    // When
    let result = await getPaginateBlogApi(req);

    // Expect
    expect(result.status).equal(200);
    let jsonResult = await result.json();
    expect(jsonResult).toMatchObject({
      counts: 3,
      page_count: 1,
      page: 1,
      page_size: 10,
      results: [
        {
          id: "fbcb36bb-a273-49d6-8456-65f60988bd21",
          title: "Title A",
          link: "title-A",
          tags: [
            {
              id: "cc4db5e1-c284-4101-9738-96140409b73c",
              name: "Rust",
            },
            {
              id: "ad84c55d-11ee-4187-90cf-babe04c97ff9",
              name: "Cargo",
            },
          ],
          created_at: "2023-03-27",
        },
        {
          id: "f0bc35be-dd01-468b-9adb-d3d80bd0c73d",
          title: "Title B",
          link: "title-B",
          tags: [
            {
              id: "3c4bb783-b19e-43c0-87de-61731b740ea4",
              name: "Websocket",
            },
            {
              id: "e91852bb-f501-4c4c-8f84-81a96b529514",
              name: "Go",
            },
            {
              id: "c4091d14-a5c7-4abf-aa37-2580c45e3cde",
              name: "Redis",
            },
          ],
          created_at: "2023-03-03",
        },
        {
          id: "0dfbff12-3fab-4209-97d3-be7ef3b598fa",
          title: "Title C",
          link: "title-C",
          tags: [
            {
              id: "109baf4a-b3ee-433e-84bc-48b0b9926fba",
              name: "Javascript",
            },
            {
              id: "9d72d711-c3d4-4dca-8a82-b012bc5021b4",
              name: "React",
            },
          ],
          created_at: "2023-02-28",
        },
      ],
    });
  });

  test("pagination blog", async () => {
    // Given
    const { req } = createMocks({
      url: "http://localhost:3000/api/blog?page=2&page_size=2",
      method: "GET",
      query: {
        page: 2,
        page_size: 2,
      },
    });

    // When
    let result = await getPaginateBlogApi(req);

    // Expect
    expect(result.status).equal(200);
    let jsonResult = await result.json();
    expect(jsonResult).toMatchObject({
      counts: 3,
      page_count: 2,
      page: 2,
      page_size: 2,
      results: [
        {
          id: "0dfbff12-3fab-4209-97d3-be7ef3b598fa",
          title: "Title C",
          link: "title-C",
          tags: [
            {
              id: "109baf4a-b3ee-433e-84bc-48b0b9926fba",
              name: "Javascript",
            },
            {
              id: "9d72d711-c3d4-4dca-8a82-b012bc5021b4",
              name: "React",
            },
          ],
          created_at: "2023-02-28",
        },
      ],
    });
  });

  afterAll(async () => {
    global.JSON_PATH = DEFAULT_JSON_PATH;
  });
});
