import { Equal, Expect } from "@total-typescript/helpers";

// process.env is NodeJS.ProcessEnv, a ProcessEnv interface inside the NodeJS
// namespace. This means we can declaration merge by declaring `interface ProcessEnv`
// inside a `declare namespace NodeJS` and adding our env vars to the interface.
const envVariable = process.env.MY_ENV_VAR;

type test = Expect<Equal<typeof envVariable, string>>;
