interface IBarnner {
  title: string;
  image: string;
  color?: string;
}

const Barner = ({ title, image, color }: IBarnner) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full relative px-2 py-3 h-[150px] overflow-hidden text-white rounded-md"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <img
        src={image}
        alt="page title image"
        className="absolute right-10 -bottom-10 w-40 h-40 rounded-full object-cover"
      />
    </div>
  );
};

export default Barner;
