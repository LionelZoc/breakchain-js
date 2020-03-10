import breaker from "../../src/breaker";

const chain0 = [1, 3, 4];
const chain1 = [1, 2, 3, 4, 5];
const chain2 = [1, 4, 3, 4, 5, 2, 7, 7, 1001, 10];
const chain3 = [1, 1000, 3, 4, 5, 2, 7, 7, 1001, 10];
const chain4 = [1, 1000, 3, 4, 5, 2, 7, 7, 1001, 10, 0, -5, -9, 0];
const chain5 = [1, 0, 0, 0, 1];

describe("breaker", () => {
  test("cost should be 5", () => {
    expect(breaker(chain1)).toBe(6);
  });
  test("too small chain", () => {
    expect(breaker(chain0)).toBeFalsy();
  });
  test("cost should be 6", () => {
    expect(breaker(chain2)).toBe(5);
  });
  test("cost should be -7", () => {
    expect(breaker(chain4)).toBe(-9);
  });
  test("cost should be 0", () => {
    expect(breaker(chain5)).toBe(0);
  });
});
