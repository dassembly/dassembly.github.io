import Flare from "./background/Flare";
import Grid from "./background/Grid";
import Team from "./Team";
import Title from "./title/Animated";
import TopBar from "./TopBar";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative bg-slate-50 pb-32 dark:bg-[#0B1120]">
        <TopBar />
        <Grid />
        <Flare />
        <Title />
      </header>
      <main className="relative z-10 -mt-24 flex justify-center px-4 sm:-mt-28 sm:px-6 lg:px-8">
        <Team />
      </main>
      <footer className="flex-1 bg-white py-6 text-slate-500 dark:bg-slate-900 dark:text-slate-400"></footer>
    </div>
  );
}
