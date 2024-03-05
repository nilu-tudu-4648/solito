import {
  useSx,
  View,
  Row,
  H3,
  ScrollView,
} from 'dripsy'
import {
  useEffect,
  useState,
} from 'react'
import { TextLink } from 'solito/link'
import { Image,TouchableOpacity ,FlatList} from 'react-native'
import { useRouter } from 'solito/router'
import { allproducts } from '../data'
export function HomeScreen() {
  const sx = useSx()
  const [products, setproducts] = useState<any>([])
  const router = useRouter()
 
  function linkToSettings(id) {
    router.push(`/product/${id}`)
  }
  const featchProducts = async () => {
    try {
      // const { data } = await axios.get('https://fakestoreapi.com/products')
      setproducts(allproducts)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    featchProducts()
  }, [])
  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item}) =>    <TouchableOpacity key={item.id} onPress={()=>linkToSettings(item.id)}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100 }}
        />
        <H3>{item.title.substring(0,12)}</H3>
      </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
      </Row>
    </View>
  )
}
