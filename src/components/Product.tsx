import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded p-4 shadow">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-40 w-full object-cover rounded"
          />
          {/* <h2 className="mt-2 text-xl font-semibold">{product.title}</h2> */}
          <p className="text-gray-600">₹ {product.price}</p>
          <p className="text-sm mt-1 line-clamp-3">{product.description}</p>
          <p className="text-xs text-blue-500 mt-1">Category: {product.category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
