import fs from "fs";
import { parse } from "../src/parser";

describe("Items JSON Parser", () => {
  let input: string;

  beforeAll(() => {
    input = fs.readFileSync("users.json").toString("utf8");
  });

  it("should parse the specified json into a list of items", () => {
    const users = parse(input);

    for (const user of users) {
      expect(user.fullname).not.toBeUndefined;
      expect(user.email_address).not.toBeUndefined;
      expect(user.phone_number).not.toBeUndefined;
      expect(user.city).not.toBeUndefined;
    }
  });

  it("should filter out items that aren't complete", () => {
    const users = parse(input);
    expect(users.length).toBe(23);
  });
});
