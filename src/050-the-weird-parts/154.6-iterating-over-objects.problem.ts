import { expect, it, vitest } from "vitest";

interface User {
  id: number;
  name: string;
}

// Since Object.keys returns string[], need to type as keyof User to
// allow indexing into a User.
function printUser(user: User) {
  Object.keys(user).forEach((k) => console.log(user[k as keyof User]));
}

it("Should log all the keys of the user", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  printUser({
    id: 1,
    name: "Waqas",
  });

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});
