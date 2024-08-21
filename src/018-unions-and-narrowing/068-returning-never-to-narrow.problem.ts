import { Equal, Expect } from "@total-typescript/helpers";

const throwError = (message: string) => {
  throw new Error(message);
};

const handleSearchParams = (params: { id?: string }) => {
  // As the bottom of the type hierarchy, never is assignable to anything, so by making `throwError`
  // return never, id is typed as `string`, and the test passes. Rather than explicitly marking the
  // return type never, removing the annotation allows it to be inferred as such.
  const id = params.id || throwError("No id provided");

  type test = Expect<Equal<typeof id, string>>;

  return id;
};
