import Background from "./Background";
import Team from "./Team";
import Title from "./Title";

export default function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-800">
      <Background />
      <Title />
      <Team />
    </div>
  );
}
