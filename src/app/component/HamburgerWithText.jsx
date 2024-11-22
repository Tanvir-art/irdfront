const HamburgerWithText = () => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Hamburger Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h18M3 12h18m-9 7h9"
        />
      </svg>

      {/* Text */}
      <span className="text-lg font-semibold text-gray-700">
        Duas Importance
      </span>
    </div>
  );
};

export default HamburgerWithText;
