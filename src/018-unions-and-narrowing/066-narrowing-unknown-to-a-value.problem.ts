import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const parseValue = (value: unknown): string => {
  // Optional chaining is runtime, so const id = value?.data?.id doesn't work here
  // because it doesn't narrow the type at all for the compiler. Must check x != null
  // because typeof null === "object" in javascript. It's "the intentional absence of
  // an object" the same way NaN is "the intentional absence of a number" and hence
  // typeof NaN === "number".
  // zod is a cool library for doing easier validation of stuff like this.
  if (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  ) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

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
