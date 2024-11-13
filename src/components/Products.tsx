import React from 'react';
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
};

const Products: React.FC = () => {
  const productList: Product[] = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

  return (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((product) => (
          <li key={product.id} className="bg-blue-100 p-4 rounded-lg hover:shadow-lg">
            <Link className="text-xl font-semibold text-blue-600 hover:underline" to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
