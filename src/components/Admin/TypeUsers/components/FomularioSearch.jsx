export default function FomularioSearch({ search, setsearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };

  return (
    <form>
      <input
        className=" focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
        type="text"
        placeholder="Search"
        name="Search"
        value={search}
        onChange={(e) => {
          handleSubmit(e);
        }}
      />
    </form>
  );
}
