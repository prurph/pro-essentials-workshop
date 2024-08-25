// Ways to enable excess property warnings (e.g. adding `search` to `options` below)
// 1. Annotate variable as desired type
// 2. Use `satisfies` with desired type on variable
// 3. Pass parameter directly inline to a method that takes the type
interface FetchOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

// 1: add `FetchOptions` annotation
const options: FetchOptions = {
  url: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  // @ts-expect-error
  search: new URLSearchParams({
    limit: "10",
  }),
}; // 2: `satisfies FetchOptions` here (instead of annotation above)

const myFetch = async (options: FetchOptions) => {};

// 3: call as `myFetch({url: ...})` rather than assigning to variable,
// causing TS to type it as a `FetchOptions` based on the function type
myFetch(options);
