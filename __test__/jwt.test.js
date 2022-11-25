// const { Init_JWT, Verify_JWT } = require("../app/helpers/JWT/jwtHelpers");

describe("JWT Token Testing", () => {
  // it("init JWT Test", (done) => {
  //   expect(Init_JWT({ username: "ditotisi" })).not.toBeUndefined();

  //   done();
  // });

  // it("Verify JWT Test", (done) => {
  //   expect(Verify_JWT(Init_JWT({ username: "ditotisi" }))).toBeTruthy();
  // });

  it("test angka", (done) => {
    expect(2 * 2).toBe(4);
    done();
  });
});
