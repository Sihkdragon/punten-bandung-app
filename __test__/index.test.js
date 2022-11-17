const request = require("supertest");
const app = require("../index");

const APIResponse = {
  statusCode: 200,
  message: "ok",
  payload: {
    id: 1,
    username: "admin",
    address: "Tangerang",
  },
};

describe("Test the root path", () => {
  test.skip("It should response the GET method", (done) => {
    request(app)
      .get("/api/tabloids")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Functional Test", () => {
  test.skip("Expect number division right", (done) => {
    expect({ name: "Dito" }).toHaveProperty("name");
    done();
  });

  it("Object Structured Should Have Key", (done) => {
    expect(APIResponse.payload).toHaveProperty("username");

    done();
  });
});
