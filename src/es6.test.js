import { wait } from "./es6.js";

test("It resolves with 'Hello World' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "Hello World");
  expect(data).toEqual("Hello World");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});
