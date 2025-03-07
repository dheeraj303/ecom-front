import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Spinner';
import ProductCard from '../components/ProductCard';

const SearchProductList = () => {
  const { term } = useParams();
  const api = `https://dummyjson.com/products/search?q=${term}`;

  const { data, loading, error } = useFetch(api);

  if (loading) return <Loading />;
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!data || data.products.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 md:px-5 lg:px-10 xl:px-24">
      {data.products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          thumbnail={product.thumbnail}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default SearchProductList;
