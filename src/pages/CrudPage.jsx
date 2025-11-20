import CrudAdd from "../components/crud/CrudAdd";
import CrudList from "../components/crud/CrudList";

function CrudPage() {
  return (
    <div className="w-[1600px] mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">CRUD Page</h1>
      <CrudAdd />
      <CrudList />
    </div>
  );
}

export default CrudPage;
