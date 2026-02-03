import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface Props {
  data: { name: string; value: number }[];
}

const COLORS = ["#2563eb", "#f59e0b"];

const EVTypePie = ({ data }: Props) => {
  return (
    <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 p-6 rounded-2xl shadow-xl"
>
     <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
  📈 EV Adoption Growth Over Time
</h2>


      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVTypePie;
