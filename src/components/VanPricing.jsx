import { useOutletContext } from "react-router-dom";

export default function VanPricing() {
  const [vanData] = useOutletContext();

  return (
    <p className="pricing">
      <strong>${vanData.price}.00</strong>/day
    </p>
  );
}
