const SubscribePage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center">
      <div className="max-w-2xl w-full text-left">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Subscribe to get more fitness information
        </h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          We'll send you curated fitness information every week!
        </p>

        {/* Email Input */}
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email *
        </label>
        <div className="flex flex-col sm:flex-row w-full">
          <input
            type="email"
            id="email"
            placeholder="e.g. email@example.com"
            className="flex-1 p-3 border border-gray-300 bg-yellow-50 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none"
          />
          <button className="bg-red-500 text-white px-4 py-3 font-bold rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-red-600">
            Join Our Mailing List
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
