// This requires the defined keys to exist, and the index signature
// allows any other string: number mapping as well. Also note that
// the added items must match the index signature.
interface Scores {
  math: number;
  english: number;
  science: number;
  [subject: string]: number;
}

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
