import { setError } from "redux/actions";
import { setGasData } from "redux/actions/gas";
import store from "redux/store";
import api from "services/api";

export function getGasData() {
  api
    .request({ url: "/api/gas_price_eip_1559", method: "GET" })
    .then(({ data }) => store.dispatch(setGasData(data)))
    .catch((error) => store.dispatch(setError(error)));
}
