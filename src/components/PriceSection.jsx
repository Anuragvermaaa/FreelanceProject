const PriceSection = ({ formData, handleInputChange }) => {
  return (
    <div className="mb-4 sm:mb-6 p-3 sm:p-4">
      <h2 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-4">
        SET A PRICE
      </h2>
      <input
        type="number"
        name="price"
        value={formData.price || ""}
        placeholder="₹"
        className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PriceSection;
