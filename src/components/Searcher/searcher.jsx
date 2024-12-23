import { useSearcher } from "../../talons/useSearcher";

export function Searcher(props) {
  const talonProps = useSearcher();
  const { handleOnSubmit, handleOnChange, value } = talonProps;
  return (
    <div className="flex w-full justify-center">
      <form onSubmit={handleOnSubmit} className="w-96">
        <div className="bg-white border-2  shadow p-2 relative rounded-xl flex">
          <span className="w-auto flex justify-end  items-center text-gray-700 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            name="episodequery"
            className="border-white outline-none border-0 w-full rounded-xl p-2"
            type="text"
            placeholder="Ingresa el producto a buscar?"
            id="product"
            onChange={handleOnChange}
            value={value}
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2"
          >
            <p className="font-semibold text-xs">Search</p>
          </button>
        </div>
      </form>
    </div>
  );
}
