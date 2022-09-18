import { Card } from "components";

function GasPriceCard({ title, value, base, priority, color }) {
  return (
    <Card>
      <center>
        <a>
          <b>{title}</b>
        </a>
        <p style={(style.primary, { color })}>{value} gwei</p>
        <a style={style.secondary}>
          Base: {base} | Priority: {priority}
        </a>
        <p style={style.secondary}>$0.62 | ~ 3 mins: 0 secs</p>
      </center>
    </Card>
  );
}

const style = {
  primary: {
    fontSize: 20,
  },
  secondary: {
    fontSize: 14,
    color: "grey",
  },
};

export default GasPriceCard;
