const LocationSection = ({ formData, handleInputChange }) => {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="mb-4 sm:mb-6 p-3 sm:p-4">
      <h2 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-4">
        CONFIRM YOUR LOCATION
      </h2>
      <button
        type="button"
        className="w-full p-1.5 sm:p-2 bg-orange-500 text-white rounded-md mb-3 sm:mb-4 hover:bg-orange-600 text-xs sm:text-sm"
      >
        USE MY CURRENT LOCATION
      </button>
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          State *
        </label>
        <select
          name="state"
          value={formData.state || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSection;
