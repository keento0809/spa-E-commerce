import { getDbPath } from "@/constants";
import type { Product } from "@/types/product";
import path from "path";
import { promises } from "fs";

export const filenames = {
  products: "products.json",
} as const;

type JsonDataType = Product;

type Filenames = (typeof filenames)[keyof typeof filenames];

export async function getJSONfromFile<T extends JsonDataType>(
  filename: Filenames,
  dbPath: string = getDbPath()
): Promise<T[]> {
  const filePath = path.join(dbPath, filename);
  const data = await promises.readFile(filePath);
  return JSON.parse(data.toString());
}
