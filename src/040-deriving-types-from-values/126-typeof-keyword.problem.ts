import { Equal, Expect } from "@total-typescript/helpers";

const configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};

// Or two step:
//   type Configurations = typeof configurations
//   type Environment = keyof Configurations
// but `keyof typeof variable` is very common
// keyof works on types, so need typeof to convert
// a runtime value into a type
type Environment = keyof typeof configurations;

type test = Expect<
  Equal<Environment, "development" | "production" | "staging">
>;
