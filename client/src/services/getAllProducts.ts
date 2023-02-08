import { IProduct } from '../interfaces/IProduct'

export default async function getAllProducts (): Promise<IProduct[]> {
  const response = await window.fetch('http://localhost:3000/products')
  const data = await response.json()

  return data
}
