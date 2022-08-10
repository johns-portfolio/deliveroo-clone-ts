import { Image, Text, TouchableOpacity, View } from 'react-native'

const CategoryItem = ({ imgUrl, title }: { imgUrl: string; title: string }) => {
  return (
    <View className="relative items-center mr-2">
      <TouchableOpacity>
        <Image
          source={{ uri: imgUrl }}
          className="rounded-md w-16 h-16"
        />
      </TouchableOpacity>
      <Text className="absolute text-white bottom-1 left-1 font-bold">
        {title}
      </Text>
    </View>
  )
}

export default CategoryItem
