import { rest } from "msw";
import { readMockData } from "../data";

export const handlers = [
  rest.get(
    "http://localhost:3000/api/getFeaturedProducts",
    async (req, res, ctx) => {
      const { mockProducts } = await readMockData();
      return res(ctx.json({ featuredProducts: mockProducts }));
    }
  ),
];
