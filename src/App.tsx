import Calendar from "./components/CalenderMain";

const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="min-h-screen bg-white flex  justify-center items-center flex-col">
        <h1 className="text-2xl font-bold text-center mb-10">
          Calendar Component
        </h1>
        <Calendar date="1999-12-03" />
      </div>
    </div>
  );
};

export default App;
