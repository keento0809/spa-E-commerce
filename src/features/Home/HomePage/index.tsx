import SearchBar from "@/components/common/SearchBar";
import useHomePage from "@/hooks/HomePage";
import { Product } from "@/types/product";
import Image from "next/image";
import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";
import Link from "next/link";

interface Props {
  featuredProductsData: Product[];
}

export default function HomePage({ featuredProductsData }: Props) {
  const {
    filteredProducts,
    selectedCategories,
    handleChangeSearchResults,
    handleSortByCategory,
  } = useHomePage({
    featuredProductsData,
  });

  // TODO: delete this later
  const labels = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div>
      <h3 className="text-2xl">HomePage</h3>
      {/* temporary stylings */}
      <div className="py-8">
        <SearchBar onChange={handleChangeSearchResults} />
      </div>
      <div className="py-8">
        <SelectCheckBoxGroup
          labels={labels}
          checkedItems={selectedCategories}
          onChange={handleSortByCategory}
        />
      </div>
      <div className="grid grid-cols-4">
        {filteredProducts?.map((product) => {
          return (
            <div className="basis-1" key={product.id}>
              <h2>{product.title}</h2>
              <Image
                src={product.image}
                alt="product"
                width={100}
                height={100}
              />
              <button>
                <Link href={`/product-detail/${product.id}`}>Detail</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
