import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
} from "recharts";

interface Props {
  data: { year: string; count: number }[];
}

const YearTrend = ({ data }: Props) => {
  return (
    <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 p-6 rounded-2xl shadow-xl"
>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        EV Adoption Growth Over Years
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#3b82f6"
            fill="#bfdbfe"
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#1d4ed8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearTrend;
