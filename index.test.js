//Test Suite

const { multiply, fetchData } = require("./index");

describe("Multiplication", () => {
  test("2 and 5 multiply equals to 10", () => {
    expect(multiply(2, 5)).toBe(10);
  });

  test("Object are equal", () => {
    const obj1 = {
      name: "Saurabh",
    };
    expect(obj1).toEqual({ name: "Saurabh" });
  });

  test("Next matchers", () => {
    const testVar = null;
    expect(testVar).toBeNull();
    expect(testVar).not.toBeTruthy();
    expect(testVar).not.toBeUndefined();
    expect(testVar).toBeFalsy();
  });
  test("Number comparison matcher", () => {
    const testVar = 2 + 5;
    expect(testVar).not.toBeNull();
    expect(testVar).toBeTruthy();
    expect(testVar).not.toBeUndefined();
    expect(testVar).not.toBeFalsy();
    expect(testVar).toBeGreaterThan(4);
    expect(testVar).toBeGreaterThanOrEqual(4);
    expect(testVar).toBeLessThan(8);
    expect(testVar).toBeLessThanOrEqual(8);

    const floatValue = 0.2 + 0.1;

    expect(floatValue).toBeCloseTo(0.3, 2);
  });

  test("String matchers", () => {
    const name = "Saurabh";
    expect(name).not.toMatch(/I/); //pass regex in the agrument
  });

  test("Array matchers", () => {
    const listArr = [1, 2, 5, 8];
    expect(listArr).toContain(8);
  });

  test("Exception matchers", () => {
    // function throwing error
    function errorThrow() {
      throw Error("File not found");
    }

    expect(() => errorThrow()).toThrow();
    expect(() => errorThrow()).toThrow(Error);
    expect(() => errorThrow()).toThrow("File not found");
    expect(() => errorThrow()).toThrow(/not found/);
  });

  //Function mocking

  test("Function mocking", () => {
    const isValid = jest.fn(() => true);
    isValid();
    expect(isValid).toHaveReturned();
    expect(isValid).toHaveReturnedWith(true);
  });

  // Async  testing

  test("Async function Unit testing", () => {
    fetchData().then((data) => {
      expect(data).toBe("Resolved");
    });
  });

  test("Async function unit testng using async", async () => {
    const data = await fetchData();
    expect(data).toBe("Resolved");
  });

  test("Async function unit testing for error throw using async", async () => {
    try {
      await fetchData(true);
    } catch (error) {
      expect(error).toBe("Rejected, error occured");
    }
  });

  test("Async function uni testing for error", () => {
    fetchData(true)
      .then((data) => {
        expect(data).toBe("Resolved");
      })
      .catch((error) => {
        expect(error).toBe("Rejected, error occured");
      });
  });

  test("Async function using resolves and rejects matcher", async () => {
    await expect(fetchData()).resolves.toBe("Resolved");
    await expect(fetchData(true)).rejects.toBe("Rejected, error occured");
  });
});
