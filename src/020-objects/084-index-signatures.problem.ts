const scores: Record<string, number> = {};
// The other way:
//   const scores: { [subject: string]: number } = {};
// is called an "index signature". `Record` is just
// a type constructor for that.

scores.math = 95;
scores.english = 90;
scores.science = 85;
