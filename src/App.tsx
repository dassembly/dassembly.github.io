import Flare from "./background/Flare";
import Grid from "./background/Grid";
import Team from "./Team";
import Title from "./Title";
import TopBar from "./TopBar";

export default function App() {
  return (
    <div className="flex h-screen flex-col">
      <header className="relative h-3/5 bg-slate-50 dark:bg-[#0B1120]">
        <TopBar />
        <Grid />
        <Flare />
        <Title />
        <div className="absolute inset-x-0 bottom-0 top-0 flex w-full translate-y-1/2 transform justify-center">
          <Team />
        </div>
      </header>
      <footer className="h-2/5 bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400"></footer>
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="h-screen relative">
//       <header className="h-3/5 relative bg-slate-50 dark:bg-[#0B1120]">
//         <Grid />
//         <Flare />
//         <Title />
//       </header>
//       <section className="absolute inset-x-0 z-10">
//         <Team />

//       </section>
//       <footer className="h-2/5 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
//       </footer>
//     </div>
//   );
// }
