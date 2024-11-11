import { calc, Order } from "./calculateComponents";
import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "debug";

const orders: Order[] = [
  { Coffee: 400 },
  { Cappucino: 20 },
  { Espresso: 4 },
  { LatteMacchiato: 10 },
];

const result = calc(orders);
logger.debug(result);
