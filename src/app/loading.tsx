const Loader = () => {
  return (
    <div
      className={`flex fixed z-50 bg-white justify-center items-center h-screen w-full transition-opacity duration-300`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
