import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { createMocks } from "node-mocks-http";
import { GET as getDetailBlogApi } from "@/app/api/blog/[id]/route";
import { DEFAULT_JSON_PATH, DEFAULT_MD_PATH, WORKDIR } from "@/shared/constants";

describe("/api/blog/[id]", () => {
  beforeAll(async () => {
    global.JSON_PATH = `${WORKDIR}/__tests__/data/json/`;
    global.MD_PATH = `${WORKDIR}/__tests__/data/md/`;
  });

  test("blog found", async () => {
    // Given
    const id = "fbcb36bb-a273-49d6-8456-65f60988bd21";
    const { req } = createMocks({
      url: `http://localhost:3000/api/blog/${id}`,
      method: "GET",
    });

    // When
    let result = await getDetailBlogApi(req, { params: { id } });

    // Expect
    let jsonResult = await result.json();
    expect(result.status).equal(200);
    delete jsonResult["body"];
    expect(jsonResult).toMatchObject({
      id,
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
      // body: "# Title A",
    });
  });

  test("blog not found", async () => {
    // Given
    const id = "aaaa-bbbb-cccc-dddd-eeee";
    const { req } = createMocks({
      url: `http://localhost:3000/api/blog/${id}`,
      method: "GET",
    });

    // When
    let result = await getDetailBlogApi(req, { params: { id } });

    // Expect
    expect(result.status).equal(404);
  });

  afterAll(async () => {
    global.JSON_PATH = DEFAULT_JSON_PATH;
    global.MD_PATH = DEFAULT_MD_PATH;
  });
});
