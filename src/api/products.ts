import type { Card, Product } from '@/types'

const BASE_URL = 'https://dummyjson.com/products'

export async function getProducts(limit = 12): Promise<Card[]> {
  const response = await fetch(`${BASE_URL}?limit=${limit}&select=title,price,thumbnail,category`)
  if (!response.ok) throw new Error(`Ошибка ${response.status}`)
  const data = (await response.json()) as { products: Card[]; total: number }
  return data.products
}

export async function getProduct(id: string | number): Promise<Product> {
  const response = await fetch(
    `${BASE_URL}/${id}?select=title,price,thumbnail,category,description`,
  )
  if (!response.ok) throw new Error(`Ошибка ${response.status}`)
  const data = (await response.json()) as Product
  return data
}
