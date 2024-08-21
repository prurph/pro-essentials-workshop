import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app")!;

// How do I ensure that appElement is defined?

// Another option instead of nullish-coalescing operator (!).
// Compiler knows on line 13 appElement can't be undefined.
// if (!appElement) {
//   throw new Error("Could not find #app element");
// }

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
