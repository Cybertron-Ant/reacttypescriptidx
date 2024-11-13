import React from 'react';
import { useParams } from 'react-router-dom';

// Define the route parameters type
type Params = {
  id: string;
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<Params>();
  return <h1 className="text-2xl font-bold text-center">Product Detail for Product ID: {id}</h1>;
};

export default ProductDetail;
