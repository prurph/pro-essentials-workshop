import { Equal, Expect } from "@total-typescript/helpers";

// Exists because of `pnpm i @types/diff@5.2.0 -D`
// I had issues with "no default export" when I didn't add the exact version
// to align with the version of Diff being used. Without it; pnpm installed
// @types/diff@5.2.1, but there doesn't appear to _be_ a diff@5.2.1
import Diff from "diff";

const message = "Hello, world!";

const secondMessage = "Goodbye, world!";

const diff = Diff.diffChars(message, secondMessage);

type test = Expect<
  Equal<
    typeof diff,
    {
      count?: number;
      value: string;
      added?: boolean;
      removed?: boolean;
    }[]
  >
>;
