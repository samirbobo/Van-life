import { useOutletContext } from "react-router-dom";

export default function VanDetails() {
  const [vanData] = useOutletContext();

  return (
    <>
      <h4>
        <strong>Name: </strong>
        {vanData.name}
      </h4>
      <p>
        <strong>Category: </strong>
        {vanData.type}
      </p>
      <p>
        <strong>Description: </strong>
        {vanData.description}
      </p>
      <p>
        <strong>Visibility: </strong>Public
      </p>
    </>
  );
}
