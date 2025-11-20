const Percentage = ({ name, value }: { name: string; value: number }) => {
  return (
    <div className="w-full bg-primary_300 p-2 flex items-center gap-2 justify-center">
      <h3 className="text-white w-1/4">{name}</h3>
      <div style={{ width: `${value}` }} className="bg-purple-800 rounded-sm h-1 w-full"></div>
    </div>
  );
};

export default Percentage;
