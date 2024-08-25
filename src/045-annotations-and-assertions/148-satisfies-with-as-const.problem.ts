import { Equal, Expect } from "@total-typescript/helpers";

// `as const` before `satisfies` because as const modifies the
// value, not the type, so it can't go on the satisfies value.
const routes = {
  "/": {
    component: "Home",
  },
  "/about": {
    component: "About",
    // @ts-expect-error
    search: "?foo=bar",
  },
} as const satisfies Record<string, { component: string }>;

// @ts-expect-error
routes["/"].component = "About";

type tests = [
  Expect<Equal<(typeof routes)["/"]["component"], "Home">>,
  Expect<Equal<(typeof routes)["/about"]["component"], "About">>
];
