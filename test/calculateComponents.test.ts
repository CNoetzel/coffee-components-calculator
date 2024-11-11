import { expect } from "chai";
import { calc, Order } from "../src/calculateComponents";

describe("calculate components", () => {
  it("should calculate the correct amount of components (simple case)", () => {
    const orders: Order[] = [
      { Coffee: 1 },
      { Cappucino: 1 },
      { Espresso: 1 },
      { LatteMacchiato: 1 },
    ];

    const result = calc(orders);
    expect(result).to.deep.equal({
      coffee: 40,
      milk: 400,
      sticks: 2,
      cocoa: 5,
    });
  });

  it("should calculate the correct amount of components (complex case)", () => {
    const orders: Order[] = [
      { Coffee: 400 },
      { Cappucino: 20 },
      { Espresso: 4 },
      { LatteMacchiato: 10 },
    ];

    const result = calc(orders);
    expect(result).to.deep.equal({
      coffee: 4400,
      milk: 6000,
      sticks: 2,
      cocoa: 50,
    });
  });
});
