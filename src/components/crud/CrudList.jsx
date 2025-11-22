import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, editItem } from '../../features/crud/ProductSlice';
import { useState } from 'react';

function CrudList() {
  const list = useSelector((s) => s.products.items);
  const { user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  const isAdmin = user?.role === 'admin';

  const [editItemId, setEditItemId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditStart = (item) => {
    setEditItemId(item.id);
    setEditData({
      title: item.title,
      desc: item.desc,
      price: item.price,
      image: item.image,
    });
  };

  const handleEditSave = (id) => {
    dispatch(editItem({ id, updatedItem: editData }));
    setEditItemId(null);
  };
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {list.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-xl shadow">
          <img
            src={editItemId === item.id ? editData.image : item.image}
            className="w-full h-56 object-cover rounded-lg"
            alt={item.title}
          />
          {editItemId === item.id ? (
            <div className="space-y-2 mt-3">
              <input
                name="title"
                value={editData.title}
                onChange={handleEditChange}
                className="border p-2 w-full"
              />
              <textarea
                name="desc"
                value={editData.desc}
                onChange={handleEditChange}
                className="border p-2 w-full"></textarea>
              <input
                name="price"
                value={editData.price}
                onChange={handleEditChange}
                className="border p-2 w-full"
              />
              <input
                name="image"
                value={editData.image}
                onChange={handleEditChange}
                className="border p-2 w-full"
                placeholder="Rasm URL"
              />
            </div>
          ) : (
            <>
              <h2 className="text-2xl mt-3">{item.title}</h2>
              <p className="text-gray-500">{item.desc}</p>
              <p className="text-xl font-bold mt-2">{item.price} so‘m</p>
            </>
          )}
          {isAdmin && (
            <div className="flex gap-3 mt-4">
              {editItemId === item.id ? (
                <button
                  onClick={() => handleEditSave(item.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg">
                  Saqlash
                </button>
              ) : (
                <button
                  onClick={() => handleEditStart(item)}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg">
                  Tahrirlash
                </button>
              )}
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                style={{ display: editItemId === item.id ? 'none' : 'block' }}>
                O‘chirish
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CrudList;
