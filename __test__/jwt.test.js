const { Init_JWT, Verify_JWT } = require("../app/helpers/JWT/jwtHelpers");

describe("JWT Token Testing", () => {
  it("init JWT Test", (done) => {
    expect(Init_JWT({ username: "ditotisi" })).not.toBeUndefined();

    done();
  });

  it("Verify JWT Test", (done) => {
    expect(Verify_JWT(Init_JWT({ username: "ditotisi" }))).toBeTruthy();
  });
});
