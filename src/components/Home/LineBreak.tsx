const LineBreak = () => {
  return (
    <div className="relative mx-5 mb-5 md:mb-10 my-3">
      <div className="bg-gradient-to-l from-secondary to-secondary via-gray-600 h-[1px]"></div>
      <div
        className="absolute left-0 right-0 top-full h-6 -mt-2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(112,59,247,0.2) 10%, transparent 60%)",
        }}
      ></div>
    </div>
  );
};

export default LineBreak;
