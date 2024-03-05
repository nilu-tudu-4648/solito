import { View, Text } from 'dripsy'
import { useEffect, useState } from 'react'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { allproducts } from '../data'
import { Image } from 'react-native'

const { useParam } = createParam<{ id: string }>()

export function ProductDetailScreen() {
  const [id] = useParam('id')
  const [product, setproduct] = useState<any>(null)
  useEffect(() => {
    setproduct(allproducts.find((ite) => ite.id == id))
  }, [])
  if (!product) return null
  return (
    <View sx={{ flex: 1, alignItems: 'center' }}>
      <Image
        source={{ uri: product.image }}
        style={{ width: 400, height: 500 }}
      />
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`Product ID: ${product.title}`}</Text>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`${product.description}`}</Text>
    </View>
  )
}
