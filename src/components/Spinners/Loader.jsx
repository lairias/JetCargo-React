import "../../css/SpinnerLoader.css";

export const SpinerLoader = () => {
  return (
    <div className="w-full">
       <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
      </div>
  );
};
