import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: { name: string; avgRange: number }[];
}

const RangeByMake = ({ data }: Props) => {
  return (
    <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 p-6 rounded-2xl shadow-xl"
>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Average Electric Range (Top Makes)
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avgRange" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RangeByMake;
