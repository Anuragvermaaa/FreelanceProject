const ButtonGroup = ({ label, name, options, selectedValue, onChange }) => (
  <div className="mb-4 sm:mb-6">
    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="flex flex-wrap gap-1 sm:gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(name, option)}
          className={`px-2 sm:px-3 py-1 sm:py-1.5 border rounded-md text-xs sm:text-sm ${
            String(selectedValue) === String(option)
              ? "bg-blue-400 text-white"
              : "bg-white hover:bg-blue-200"
          }`}
          aria-pressed={String(selectedValue) === String(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

const ReviewDetails = ({ formData, handleInputChange, handleNumberChange }) => {
  return (
    <div className="p-3 sm:p-4">
      <h2 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-4">
        INCLUDE SOME DETAILS
      </h2>

      <ButtonGroup
        label="Type"
        name="type"
        options={[
          "Flats/Apartments",
          "Independent/Builder Floor",
          "Farm House",
          "House & Villa",
        ]}
        selectedValue={formData.type}
        onChange={handleNumberChange}
      />

      <ButtonGroup
        label="BHK"
        name="bhk"
        options={[1, 2, 3, 4, "4+"]}
        selectedValue={formData.bhk}
        onChange={handleNumberChange}
      />

      <ButtonGroup
        label="Bathrooms"
        name="bathrooms"
        options={[1, 2, 3, 4, "4+"]}
        selectedValue={formData.bathrooms}
        onChange={handleNumberChange}
      />

      <ButtonGroup
        label="Furnishing"
        name="furnishing"
        options={["Furnished", "Semi-Furnished", "Unfurnished"]}
        selectedValue={formData.furnishing}
        onChange={handleNumberChange}
      />

      <ButtonGroup
        label="Construction Status"
        name="projectStatus"
        options={["New Launch", "Ready to Move", "Under Construction"]}
        selectedValue={formData.projectStatus}
        onChange={handleNumberChange}
      />

      <ButtonGroup
        label="Listed By"
        name="listedBy"
        options={["Builder", "Dealer", "Owner"]}
        selectedValue={formData.listedBy}
        onChange={handleNumberChange}
      />

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Super Builtup area (sqft) *
        </label>
        <input
          type="number"
          name="superBuiltUpArea"
          value={formData.superBuiltUpArea || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Carpet Area (sqft) *
        </label>
        <input
          type="number"
          name="carpetArea"
          value={formData.carpetArea || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Maintenance (Monthly)
        </label>
        <input
          type="number"
          name="maintenance"
          value={formData.maintenance || ""}
          placeholder="₹"
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Total Floors
        </label>
        <input
          type="number"
          name="totalFloors"
          value={formData.totalFloors || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Floor No
        </label>
        <input
          type="number"
          name="floorNo"
          value={formData.floorNo || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
        />
      </div>

      <ButtonGroup
        label="Car Parking"
        name="carParking"
        options={[0, 1, 2, 3, "3+"]}
        selectedValue={formData.carParking}
        onChange={handleNumberChange}
      />

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Facing
        </label>
        <select
          name="facing"
          value={formData.facing || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          {["North", "East", "West", "South"].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Project Name
        </label>
        <input
          type="text"
          name="projectName"
          value={formData.projectName || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Ad Title *
        </label>
        <input
          type="text"
          name="adTitle"
          value={formData.adTitle || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          rows="4"
          maxLength="70"
          placeholder="Mention the key features of your item (e.g., brand, model, age, type)"
          onChange={handleInputChange}
          required
        />
        <div className="text-right text-[10px] sm:text-xs text-gray-500 mt-1">
          {(formData.description || "").length}/70
        </div>
      </div>

      <h2 className="text-base sm:text-lg font-bold uppercase mt-4 sm:mt-6 mb-3 sm:mb-4">
        REVIEW YOUR DETAILS
      </h2>
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-200 rounded-full mr-2 sm:mr-3 flex items-center justify-center">
          <span className="text-gray-500 text-lg sm:text-xl">👤</span>
        </div>
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            placeholder="Anurag Verma"
            className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mb-2">
        Let's verify your account
      </p>
      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
        We will send you a confirmation code on the email id and mobile number
        provided below
      </p>
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Mobile Number *
        </label>
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber || ""}
          className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
};

export default ReviewDetails;
