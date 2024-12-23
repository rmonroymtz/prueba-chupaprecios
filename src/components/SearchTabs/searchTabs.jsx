import { useSearchTabs } from "../../talons/useSearchTabs";

export function SearchTabs(props) {
  const talonProps = useSearchTabs();

  const { avianbleSearchers, currentStore, handleSetSearcher } = talonProps;

  const avianbleSearchersButtons = avianbleSearchers.map(({ name, id }) => (
    <button
      key={"buttonSelect-" + name}
      className={`text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 ${
        currentStore === id ? "ring-4 outline-none ring-gray-700" : ""
      } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}
      onClick={() => handleSetSearcher(id)}
    >
      {name}
    </button>
  ));

  return (
    <div>
      <div className="flex gap-4 justify-center p-4">
        {avianbleSearchersButtons}
      </div>
    </div>
  );
}
