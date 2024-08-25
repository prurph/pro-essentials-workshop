import { Equal, Expect } from "@total-typescript/helpers";

// 1

// Variable annotation: typecheck and infer type as annotated
const obj: Record<string, number> = {};

obj.a = 1;

obj.b = 2;

type test = Expect<Equal<typeof obj.a, number>>;

// 2

// Use satisfies to typecheck without changing inferred type
const menuConfig = {
  home: {
    label: "Home",
    link: "/home",
  },
  services: {
    label: "Services",
    children: [
      {
        label: "Consulting",
        link: "/services/consulting",
      },
      {
        label: "Development",
        link: "/services/development",
      },
    ],
  },
} satisfies Record<
  string,
  | {
      label: string;
      link: string;
    }
  | {
      label: string;
      children: {
        label: string;
        link: string;
      }[];
    }
>;

type tests = [
  Expect<Equal<typeof menuConfig.home.label, string>>,
  Expect<
    Equal<
      typeof menuConfig.services.children,
      {
        label: string;
        link: string;
      }[]
    >
  >
];

// 3

// as: tell Typescript we know ("better than you") what the type of this is
const element = document.getElementById("app") as HTMLElement;

type test3 = Expect<Equal<typeof element, HTMLElement>>;
