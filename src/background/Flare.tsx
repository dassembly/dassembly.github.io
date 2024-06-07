import background from "../assets/background.png";

export default function Flare() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex justify-center overflow-hidden">
      <div className="flex w-[108rem] flex-none justify-end">
        <img
          src={background}
          alt=""
          className="w-[90rem] max-w-none flex-none"
          decoding="async"
        />
      </div>
    </div>
  );
}
