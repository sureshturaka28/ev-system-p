import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

interface Props {
  data: { name: string; value: number }[];
}

const COLORS = ["#22c55e", "#ef4444"];

const FuelEligibilityDonut = ({ data }: Props) => {
  return (
    <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 p-6 rounded-2xl shadow-xl"
>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Clean Fuel Eligibility
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={120}
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FuelEligibilityDonut;
