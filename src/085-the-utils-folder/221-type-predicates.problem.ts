import { Equal, Expect } from "@total-typescript/helpers";
import { describe, expect, it } from "vitest";

// `arg is Type` return type is a "type predicate": tells TS that
// the value is the given type when this function returns true. TS can
// do some inference of user-defined type guards, however this one
// is too complicated and requires user annotation. Note that this makes
// it unsafe since TS isn't verifying your check actually works.
const hasDataAndId = (value: unknown): value is { data: { id: string } } => {
  return (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  );
};

const parseValue = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

const parseValueAgain = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

describe("parseValue", () => {
  it("Should handle a { data: { id: string } }", () => {
    const result = parseValue({
      data: {
        id: "123",
      },
    });

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toBe("123");
  });

  it("Should error when anything else is passed in", () => {
    expect(() => parseValue("123")).toThrow("Parsing error!");
    expect(() => parseValue(123)).toThrow("Parsing error!");
  });
});

describe("parseValueAgain", () => {
  it("Should handle a { data: { id: string } }", () => {
    const result = parseValueAgain({
      data: {
        id: "123",
      },
    });

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toBe("123");
  });

  it("Should error when anything else is passed in", () => {
    expect(() => parseValueAgain("123")).toThrow("Parsing error!");
    expect(() => parseValueAgain(123)).toThrow("Parsing error!");
  });
});
