const PhotoUpload = () => {
  return (
    <div className="mb-4 sm:mb-6 p-3 sm:p-4">
      <h2 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-4">
        UPLOAD UP TO 20 PHOTOS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 sm:gap-2">
        {[...Array(20)].map((_, idx) => (
          <div
            key={idx}
            className="w-14 sm:w-16 h-14 sm:h-16 bg-gray-200 flex items-center justify-center rounded-md border border-gray-300"
          >
            <span className="text-gray-500 text-xl sm:text-2xl">+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoUpload;
