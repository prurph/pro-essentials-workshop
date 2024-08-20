import { Equal, Expect } from "@total-typescript/helpers";

type Success = "200" | "201" | "204";
type ClientError = "400" | "401" | "404";
type ServerError = "500";

type HttpCode = Success | ClientError | ServerError;

const handleErrorCase = (code: ClientError | ServerError) => {
  // An imaginary function where we only handle the errors

  type test = Expect<Equal<typeof code, "400" | "401" | "404" | "500">>;
};

const handleSuccessCase = (code: Success) => {
  // An imaginary function where we only handle the success cases

  type test = Expect<Equal<typeof code, "200" | "201" | "204">>;
};

const handleAllCase = (code: HttpCode) => {
  // An imaginary function where we handle all the cases

  type test = Expect<
    Equal<typeof code, "200" | "201" | "204" | "400" | "401" | "404" | "500">
  >;
};
