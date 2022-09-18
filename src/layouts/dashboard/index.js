import Container from "react-bootstrap/Container";

import Header from "./components/header";

function DashboardLayout(props) {
  return (
    <div>
      <Header />
      <Container>
        <div className="mt-4">{props.children}</div>
      </Container>
    </div>
  );
}

export default DashboardLayout;
