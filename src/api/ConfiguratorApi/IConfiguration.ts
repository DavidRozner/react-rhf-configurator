export interface IDesignOption {
  id: number;
  title: string;
  type: string;
  description: string;
  priceModifier: number;
  weightModifier: number;
}

export interface IConfiguration {
  design: IDesignOption[];
}
