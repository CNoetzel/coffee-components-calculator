// @ts-ignore
import * as _ from "lodash";

export interface Order {
  [key: string]: number;
}

interface Components {
  coffee: number;
  milk: number;
  sticks: number;
  cocoa: number;
}

const coffeeGrams = 10;
const milkMl = 200;
const cocoaGrams = 5;

export function calc(orders: Order[]): Components {
  let coffee = 0;
  let milk = 0;
  let sticks = 0;
  let cocoa = 0;
  let cinnamon = 0;

  orders.forEach((order) => {
    const type = Object.keys(order)[0];
    const quantity = order[type];

    if (type === "Coffee") {
      coffee += quantity * coffeeGrams;
    } else if (type === "Cappucino") {
      coffee += quantity * coffeeGrams;
      milk += quantity * milkMl;
    } else if (type === "Espresso") {
      coffee += quantity * coffeeGrams;
    } else if (type === "LatteMacchiato") {
      coffee += quantity * coffeeGrams;
      milk += quantity * milkMl;
      cocoa += quantity * cocoaGrams;
    }
  });

  sticks = Math.ceil(orders.length / 2);

  return { coffee, milk, sticks, cocoa };
}
