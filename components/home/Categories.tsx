import { ScrollView } from 'react-native'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="bg-gray-100 px-4"
    >
      <CategoryItem
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg"
        title="Fruit "
      />
      <CategoryItem
        imgUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2022%2F02%2F15%2Fclassic-cheese-pizza-FT-RECIPE0422.jpg&q=60"
        title="Pizza"
      />
      <CategoryItem
        imgUrl="http://cdn.cnn.com/cnnnext/dam/assets/151215114545-40-thai-food-27-som-tam-1.jpg"
        title="Thai"
      />
      <CategoryItem
        imgUrl="https://cdn.media.amplience.net/i/japancentre/guide-page-sushi-79-maki-sushi/Maki-sushi-rolls?$poi$&w=1200&h=630&sm=c&fmt=auto"
        title="Sushi"
      />
      <CategoryItem
        imgUrl="https://www.cookingclassy.com/wp-content/uploads/2019/06/brown-sugar-lime-baked-salmon-22.jpg"
        title="Salmon"
      />
      <CategoryItem
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg"
        title="Fruit "
      />
      <CategoryItem
        imgUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2022%2F02%2F15%2Fclassic-cheese-pizza-FT-RECIPE0422.jpg&q=60"
        title="Pizza"
      />
      <CategoryItem
        imgUrl="http://cdn.cnn.com/cnnnext/dam/assets/151215114545-40-thai-food-27-som-tam-1.jpg"
        title="Thai"
      />
    </ScrollView>
  )
}

export default Categories
