import { Image, Text, View } from 'react-native'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

const Header = () => {
  return (
    <View className="flex-row items-center pb-3 space-x-2 px-4">
      <Image
        source={{
          uri: 'https://i0.wp.com/smsforwishes.com/wp-content/uploads/2022/03/beautiful-girls.jpeg?resize=700%2C834&ssl=1'
        }}
        className="w-7 h-7 rounded-full p-4 bg-gray-300"
      />
      <View className="flex-1">
        <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
        <View className="flex-row items-center space-x-2">
          <Text className="text-xl font-bold items-center">
            Current Location
          </Text>
          <ChevronDownIcon color={'#00CCBB'} size={20} />
        </View>
      </View>
      <UserIcon color={'#00CCBB'} size={35} />
    </View>
  )
}

export default Header
