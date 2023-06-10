import { rest } from "msw";
import { readMockData } from "../data";

export const handlers = [
  rest.get("http://localhost:3000/api/products", async (req, res, ctx) => {
    const limit = req.url.searchParams.get("limit");

    const { mockProducts } = await readMockData();
    console.log("mockP: ", mockProducts);
    return res(ctx.json({ featuredProducts: mockProducts }));
  }),
  rest.get("http://localhost:3000/api/products/:id", async (req, res, ctx) => {
    const { mockProducts } = await readMockData();
    const { id } = req.params;
    return res(ctx.json({ product: mockProducts[Number(id)] }));
  }),
];
