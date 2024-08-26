// With verbatimModuleSyntax: true, `export const foo = ...` will error because
// you shouldn't use `export` keyword directly in `.cts` files. Instead remove
// the top-level export and do one export = { ... }. Without this option set,
// it will not error and you'll get a "fake" ESM.
const example = () => {
  return "hello!";
};

export = {
  example,
};
