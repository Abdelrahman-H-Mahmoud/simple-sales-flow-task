export type PriceObj = {
  amount: string,
  billingFrequency: 'MONTHLY' | 'ONCE',
  periodStart: number | null

}

export type Product = {
  name: string,
  description: string,
  price: PriceObj[]
}

export type ProductsCategory = {
  name: string,
  products: Product[]
}

export enum BillingFrequencyEnum {
  MONTHLY = "month",
  ONCE = "one time",
}