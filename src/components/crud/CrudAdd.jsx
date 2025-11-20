import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../../features/crud/CrudSlice";

function CrudAdd() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col gap-4">
      <input className="border p-3 rounded" placeholder="Sarlavha"
        value={title} onChange={(e) => setTitle(e.target.value)} />

      <input className="border p-3 rounded" placeholder="Ta'rif"
        value={desc} onChange={(e) => setDesc(e.target.value)} />

      <input className="border p-3 rounded" placeholder="Narx"
        value={price} onChange={(e) => setPrice(e.target.value)} />

      <input className="border p-3 rounded" placeholder="Rasm URL"
        value={image} onChange={(e) => setImage(e.target.value)} />

      <button
        className="bg-blue-600 text-white p-3 rounded-lg"
        onClick={() => {
          if (!title || !image) return;
          dispatch(addItem({ title, desc, price, image }));
          setTitle("");
          setDesc("");
          setPrice("");
          setImage("");
        }}>
        Qo‘shish
      </button>
    </div>
  );
}
export default CrudAdd;
