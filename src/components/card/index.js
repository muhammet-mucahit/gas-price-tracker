import { Card as BootstrapCard } from "react-bootstrap";

function Card({ children }) {
  return (
    <BootstrapCard>
      <BootstrapCard.Body>{children}</BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;
