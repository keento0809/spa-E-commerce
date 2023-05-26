import { rest } from "msw";
import { setupServer } from "msw/node";

export const mockServer = setupServer(
  rest.get("/api/getFeaturedProducts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          category: "jewelery",
          description: "This is a mock product",
          id: 0,
          image:
            "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
          price: 0,
          rating: {
            count: 0,
            rate: 3,
          },
          title: "Mock product",
        },
      })
    );
  })
);
