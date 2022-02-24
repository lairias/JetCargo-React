import { SpinerLoader } from "./Loader";

export default function Loaddin() {
  return (
    <div className="flex justify-center animate__fadeInDown">
      <div className="w-full max-w-sm">
        <SpinerLoader />
      </div>
    </div>
  );
}
