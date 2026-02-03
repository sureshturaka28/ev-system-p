export const getTopN = (
  data: any[],
  key: string,
  n = 10
) => {
  const map: Record<string, number> = {};

  data.forEach(d => {
    const value = d[key];
    if (!value) return;
    map[value] = (map[value] || 0) + 1;
  });

  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
};

export const getEVTypeDistribution = (data: any[]) => {
  const map: Record<string, number> = {};
  data.forEach(d => {
    const type = d["Electric Vehicle Type"];
    if (!type) return;
    map[type] = (map[type] || 0) + 1;
  });

  return Object.entries(map).map(([name, value]) => ({
    name,
    value,
  }));
};

export const getAverageRangeByMake = (data: any[]) => {
  const map: Record<string, { total: number; count: number }> = {};

  data.forEach(d => {
    const make = d.Make;
    const range = Number(d["Electric Range"]);
    if (!make || !range) return;

    if (!map[make]) map[make] = { total: 0, count: 0 };
    map[make].total += range;
    map[make].count += 1;
  });

  return Object.entries(map)
    .map(([name, v]) => ({
      name,
      avgRange: Math.round(v.total / v.count),
    }))
    .sort((a, b) => b.avgRange - a.avgRange)
    .slice(0, 10);
};
