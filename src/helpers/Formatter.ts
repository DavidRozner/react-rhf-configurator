export class Formatter {
  public static FormatPrice(price: number): string {
    return new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
    }).format(price);
  }

  public static FormatWeight = (weight: number): string => {
    return new Intl.NumberFormat("cs-CZ", {
      style: "unit",
      unit: "gram",
    }).format(weight);
  };
}
