import Barras from "react-barcode";

export default function Barcode({ codigo }) {
  return <Barras value={codigo} />;
}
