import { Equal, Expect } from "@total-typescript/helpers";

// Declaring a let is inferred as "any", but it's an *evolving* any, meaning
// it's actual type is inferred as it's assigned.
let selectedId;

selectedId = 123;

type test = Expect<Equal<typeof selectedId, number>>;

selectedId = "123";

type test2 = Expect<Equal<typeof selectedId, string>>;
