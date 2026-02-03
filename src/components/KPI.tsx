interface KPIProps {
  title: string;
  value: string | number;
}

const KPI = ({ title, value }: KPIProps) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-800">
        {value}
      </p>
    </div>
  );
};

export default KPI;
