/**
 * This is just an outline for how to make a test file.
 * For more information, https://jestjs.io/docs/en/tutorial-react-native
 * @author: Dylan l. Cheung <cheund3@rpi.edu>
 */

describe("app/components/TestComponent", () => {
  let tmp;

  beforeAll(() => {
    tmp = 10;
  });

  test("it should create a TestComponent", () => {
    expect(typeof(tmp)).toBe("number");
    expect(true).not.toBe(false);
  });
});
