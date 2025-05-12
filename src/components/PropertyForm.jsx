import { useState } from "react";
import SelectedCategory from "./SelectedCategory";
import PriceSection from "./PriceSection";
import PhotoUpload from "./PhotoUpload";
import LocationSection from "./LocationSection";
import ReviewDetails from "./ReviewDetails";
import Footer from "../components/Footer";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    listedBy: "",
    superBuiltUpArea: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName: "",
    projectStatus: "",
    adTitle: "",
    description: "",
    price: "",
    state: "",
    name: "",
    mobileNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNumberChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
        POST YOUR AD
      </h1>
      <form onSubmit={handleSubmit}>
        <SelectedCategory />
        <ReviewDetails
          formData={formData}
          handleInputChange={handleInputChange}
          handleNumberChange={handleNumberChange}
        />
        <PriceSection
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <PhotoUpload />
        <LocationSection
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full p-2 sm:p-3 bg-blue-600 text-white rounded-md mt-3 sm:mt-4 hover:bg-blue-700 text-sm sm:text-base"
        >
          POST NOW
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default PropertyForm;
