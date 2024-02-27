export const SelectState = ({ setState }) => {
  return (
    <div className="mb-4 flex items-baseline">
      <label
        htmlFor="select-state"
        className="block text-sm font-medium leading-6 text-gray-900 w-fit text-nowrap pr-2"
      >
        Select Your State
      </label>
      <select
        id="select-state"
        name="select-state"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
        onChange={(e) => setState(e.target.value)}
        defaultValue={null}
      >
        <option value="select">Select</option>
        <option value="WA">WA</option>
      </select>
    </div>
  );
};
