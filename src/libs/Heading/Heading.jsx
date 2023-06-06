const Heading = ({ title, subtitle, center }) => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className={center ? "text-center" : "text-start"}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
      </div>
    </div>
  );
};

export default Heading;
