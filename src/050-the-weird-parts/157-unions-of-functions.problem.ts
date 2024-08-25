const objOfFunctions = {
  string: (input: string) => input.toUpperCase(),
  number: (input: number) => input.toFixed(2),
  boolean: (input: boolean) => (input ? "true" : "false"),
};

const format = (input: string | number | boolean) => {
  // One way to do this:
  // switch (typeof input) {
  //   case "string":
  //     return objOfFunctions.string(input);
  //   case "number":
  //     return objOfFunctions.number(input);
  //   case "boolean":
  //     return objOfFunctions.boolean(input);
  // }

  // Fancy way:
  const inputType = typeof input as "string" | "number" | "boolean";
  const formatter = objOfFunctions[inputType];

  // Argument type here is the intersection of the various formatter
  // argument types, which means it's never. You can annotate the
  // argument as such and it will just work (at runtime).
  return formatter(input as never);
};
