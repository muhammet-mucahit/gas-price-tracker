import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Card } from "components";
import GasPriceCard from "./components/gas-price-card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function HomePageView({ counter }) {
  const { prices } = useSelector((state) => state.gas);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <p>Next update in {counter}s</p>
            <Container style={{ marginBottom: 15 }}>
              <Row>
                <Col>
                  <GasPriceCard
                    title="Low"
                    value={prices?.fast?.value}
                    base={prices?.fast?.base_fee}
                    priority={prices?.fast?.priority_fee}
                    color="green"
                  />
                </Col>
                <Col>
                  <GasPriceCard
                    title="Average"
                    value={prices?.normal?.value}
                    base={prices?.normal?.base_fee}
                    priority={prices?.normal?.priority_fee}
                    color="darkcyan"
                  />
                </Col>
                <Col>
                  <GasPriceCard
                    title="High"
                    value={prices?.slow?.value}
                    base={prices?.slow?.base_fee}
                    priority={prices?.slow?.priority_fee}
                    color="red"
                  />
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col>
          <Card>
            <Bar
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: true,
                    text: "Gas Prices",
                  },
                },
              }}
              data={{
                labels: ["Low", "Average", "High"],
                datasets: [
                  {
                    data: Object.keys(prices).map((key) => prices[key]?.value),
                    backgroundColor: "rgba(53, 162, 235)",
                  },
                ],
              }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePageView;
