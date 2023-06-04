import path from "path";
import { getJSONfromFile, filenames } from "@/lib/db/utils";
import type { Product } from "@/types/product";

const JSON_FILEPATH = path.join(__dirname, "json");

type ReadMockDataType = {
  mockProducts: Array<Product>;
};

export const readMockData = async () => {
  const [mockProducts] = await Promise.all([
    getJSONfromFile(filenames.products, JSON_FILEPATH),
  ]);

  return {
    mockProducts,
  };
};
