interface Props {
  makes: string[];
  cities: string[];
  types: string[];
  selectedMake: string;
  selectedCity: string;
  selectedType: string;
  yearRange: [number, number];
  setSelectedMake: (v: string) => void;
  setSelectedCity: (v: string) => void;
  setSelectedType: (v: string) => void;
  setYearRange: (v: [number, number]) => void;
}

const Filters = ({
  makes,
  cities,
  types,
  selectedMake,
  selectedCity,
  selectedType,
  yearRange,
  setSelectedMake,
  setSelectedCity,
  setSelectedType,
  setYearRange,
}: Props) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow grid grid-cols-1 md:grid-cols-4 gap-4">
      
      <select
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">All Makes</option>
        {makes.map((make) => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">All EV Types</option>
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <div className="flex gap-2">
        <input
          type="number"
          value={yearRange[0]}
          onChange={(e) =>
            setYearRange([Number(e.target.value), yearRange[1]])
          }
          className="border p-2 rounded-lg w-full"
          placeholder="From Year"
        />
        <input
          type="number"
          value={yearRange[1]}
          onChange={(e) =>
            setYearRange([yearRange[0], Number(e.target.value)])
          }
          className="border p-2 rounded-lg w-full"
          placeholder="To Year"
        />
      </div>
    </div>
  );
};

export default Filters;
