import { TextInput, View } from 'react-native'
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 px-4">
      <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-2">
        <SearchIcon size={20} color={'gray'} />
        <TextInput
          placeholder="Restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsIcon color={'#00CCBB'} />
    </View>
  )
}

export default Search
