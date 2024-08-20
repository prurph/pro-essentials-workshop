import { Expect, Equal } from "@total-typescript/helpers";

async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");
  // Can also type data: number and omit type of function
  const data = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};
