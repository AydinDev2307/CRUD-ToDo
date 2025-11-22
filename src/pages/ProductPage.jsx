import CrudAdd from '../components/crud/CrudAdd';
import CrudList from '../components/crud/CrudList';
import { useSelector } from 'react-redux';

function ProductsPage() {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === 'admin';
  return (
    <main className="w-full h-screen">
      <div className="w-[1600px] mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8">Products Page</h1>
        {isAdmin && <CrudAdd />}
        <CrudList />
      </div>
    </main>
  );
}

export default ProductsPage;
