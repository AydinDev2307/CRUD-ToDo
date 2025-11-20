import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../features/crud/CrudSlice';

function CrudList() {
  const list = useSelector((s) => s.crud.items);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {list.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-xl shadow">
          <img
            src={item.image}
            className="w-full h-56 object-cover rounded-lg"
          />
          <h2 className="text-2xl mt-3">{item.title}</h2>
          <p className="text-gray-500">{item.desc}</p>
          <p className="text-xl font-bold mt-2">{item.price} so‘m</p>

          <button
            onClick={() => dispatch(deleteItem(item.id))}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg">
            O‘chirish
          </button>
        </div>
      ))}
    </div>
  );
}

export default CrudList;
