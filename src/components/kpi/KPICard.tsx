import CountUp from "react-countup";

interface Props {
  title: string;
  value: number;
  suffix?: string;
}

const KPICard = ({ title, value, suffix }: Props) => {
  return (
    <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
      
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
        <CountUp end={value} duration={1.5} separator="," />
        {suffix}
      </h2>
    </div>
  );
};

export default KPICard;
