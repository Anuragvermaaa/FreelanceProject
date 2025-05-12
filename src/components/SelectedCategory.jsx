const SelectedCategory = () => {
  return (
    <div className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-bold uppercase">
        SELECTED CATEGORY
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 mb-3 sm:mb-4">
        For Sale: Houses & Apartments{" "}
        <span className="text-blue-600 font-semibold cursor-pointer">
          CHANGE
        </span>
      </p>
      <hr className="border-gray-300" />
    </div>
  );
};

export default SelectedCategory;
