import { setupServer } from "msw/lib/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});
