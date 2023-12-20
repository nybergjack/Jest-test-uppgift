import * as asyncFunctions from "./async";

describe("should test async functions", () => {
  it("should return array of users", async () => {
    const { expectedDataUsers } = asyncFunctions;

    const result = await asyncFunctions.getUsers();

    expect(result).toEqual(expectedDataUsers);
  });

  it("should return array of users", async () => {
    const { expectedDataGroups } = asyncFunctions;

    const result = await asyncFunctions.getGroups();

    expect(result).toEqual(expectedDataGroups);
  });
});
