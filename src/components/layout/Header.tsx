interface Props {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  onExport: () => void;
}

const Header = ({ darkMode, setDarkMode, onExport }: Props) => {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">
      
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        ⚡ EV Analytics Dashboard
      </h1>

      <div className="flex items-center gap-4">
        
        <button
          onClick={onExport}
          className="px-3 py-1 bg-green-500 text-white rounded-lg hover:scale-105 transition"
        >
          Export CSV
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>
    </header>
  );
};

export default Header;
