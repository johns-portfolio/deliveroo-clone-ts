export type RestaurantType = {
  imgUrl: string
  title: string
  rating: number
  genre: string
  address: string
  short_description: string
  dishes: {
    id: string
    name: string
    description: string
    price: number
    image: string
  }[]
}

export const restaurants: RestaurantType[] = [
  {
    imgUrl:
      'https://play-lh.googleusercontent.com/exBPtfutY2eB4nHRUX0hZzMGRK8xSWutg9t6InmzhCtRwZ3_z_F6dz9LULpmlM0DoA',
    title: 'KFC',
    rating: 4.5,
    genre: 'American',
    address: '123 abc',
    short_description:
      'Enjoy deals at some of the most vibrant dining destinations in New York City. Use the filters below to browse by location, cuisine and more—or find inspiration in one of our curated collections.',
    dishes: [
      {
        id: '1001',
        name: 'Secret Recipe Fries',
        description:
          'Crispier than your average fry and seasoned with our Secret Recipe.',
        image:
          'https://d1ralsognjng37.cloudfront.net/e7532321-9f5c-477d-a4c5-9bdf279d0050.jpeg',
        price: 4.19
      },
      {
        id: '1002',
        name: 'Famous Bowl',
        description:
          'Creamy mashed potatoes, sweet corn, and bite-sized chunks of crispy chicken are layered together then drizzled with home-style gravy and topped with a perfect blend of three shredded cheeses.',
        image:
          'https://d1ralsognjng37.cloudfront.net/4283cd53-d901-44d5-a15b-9a0c540844b3.jpeg',
        price: 6.83
      },
      {
        id: '1003',
        name: 'A La Carte Drum',
        description:
          '1 Drum piece of our freshly prepared chicken, available in Original Recipe or Extra Crispy.',
        image:
          'https://d1ralsognjng37.cloudfront.net/0c6cde09-388f-408f-8d78-ee91bfb770cc.jpeg',
        price: 5.39
      },
      {
        id: '1004',
        name: '8 pc. Family Bucket Meal',
        description:
          'Feeds 3-4. 8 pieces of our freshly prepared World Famous Chicken, available in Original Recipe or Extra Crispy, 2 large sides of your choice, and 4 biscuits.',
        image:
          'https://d1ralsognjng37.cloudfront.net/b5c6434d-4675-4e2a-ba11-4d04147c3d65.jpeg',
        price: 35.39
      },
      {
        id: '1005',
        name: '12pc Meal with FREE Beverage Bucket',
        description:
          'Feeds 5-6. 12 pieces of our freshly prepared World Famous Chicken, available in Original Recipe or Extra Crispy, 3 large sides of your choice, and 6 biscuits. Now includes a FREE Beverage Bucket for a limited time only! Available through September 11th at participating locations with purchase of 12 pc and 16 pc meals, while supplies last. Customer responsible for taxes and fees.',
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/654bf7e2295158fe1eda611a16589189/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        price: 47.03
      }
    ]
  },
  {
    imgUrl:
      'https://www.ryoiireview.com/upload/article/202005/1590652025_f5cf6ff62cfd712fdc46cfc4880b91ef.jpg',
    title: 'Kin Japaness Buffe',
    rating: 4.5,
    genre: 'American',
    address: '123 abc',
    short_description:
      'Enjoy deals at some of the most vibrant dining destinations in New York City. Use the filters below to browse by location, cuisine and more—or find inspiration in one of our curated collections.',
    dishes: [
      {
        id: '1001',
        name: 'Secret Recipe Fries',
        description:
          'Crispier than your average fry and seasoned with our Secret Recipe.',
        image:
          'https://d1ralsognjng37.cloudfront.net/e7532321-9f5c-477d-a4c5-9bdf279d0050.jpeg',
        price: 4.19
      },
      {
        id: '1002',
        name: 'Famous Bowl',
        description:
          'Creamy mashed potatoes, sweet corn, and bite-sized chunks of crispy chicken are layered together then drizzled with home-style gravy and topped with a perfect blend of three shredded cheeses.',
        image:
          'https://d1ralsognjng37.cloudfront.net/4283cd53-d901-44d5-a15b-9a0c540844b3.jpeg',
        price: 6.83
      },
      {
        id: '1003',
        name: 'A La Carte Drum',
        description:
          '1 Drum piece of our freshly prepared chicken, available in Original Recipe or Extra Crispy.',
        image:
          'https://d1ralsognjng37.cloudfront.net/0c6cde09-388f-408f-8d78-ee91bfb770cc.jpeg',
        price: 5.39
      },
      {
        id: '1004',
        name: '8 pc. Family Bucket Meal',
        description:
          'Feeds 3-4. 8 pieces of our freshly prepared World Famous Chicken, available in Original Recipe or Extra Crispy, 2 large sides of your choice, and 4 biscuits.',
        image:
          'https://d1ralsognjng37.cloudfront.net/b5c6434d-4675-4e2a-ba11-4d04147c3d65.jpeg',
        price: 35.39
      },
      {
        id: '1005',
        name: '12pc Meal with FREE Beverage Bucket',
        description:
          'Feeds 5-6. 12 pieces of our freshly prepared World Famous Chicken, available in Original Recipe or Extra Crispy, 3 large sides of your choice, and 6 biscuits. Now includes a FREE Beverage Bucket for a limited time only! Available through September 11th at participating locations with purchase of 12 pc and 16 pc meals, while supplies last. Customer responsible for taxes and fees.',
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/654bf7e2295158fe1eda611a16589189/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        price: 47.03
      }
    ]
  },
  {
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/440px-McDonald%27s_logo.svg.png',
    title: "Mcdonald's",
    rating: 4.5,
    genre: 'American',
    address: '123 abc',
    short_description:
      'Enjoy deals at some of the most vibrant dining destinations in New York City. Use the filters below to browse by location, cuisine and more—or find inspiration in one of our curated collections.',
    dishes: [
      {
        id: '1001',
        name: 'Secret Recipe Fries',
        description:
          'Crispier than your average fry and seasoned with our Secret Recipe.',
        image:
          'https://d1ralsognjng37.cloudfront.net/e7532321-9f5c-477d-a4c5-9bdf279d0050.jpeg',
        price: 4.19
      },
      {
        id: '1002',
        name: 'Famous Bowl',
        description:
          'Creamy mashed potatoes, sweet corn, and bite-sized chunks of crispy chicken are layered together then drizzled with home-style gravy and topped with a perfect blend of three shredded cheeses.',
        image:
          'https://d1ralsognjng37.cloudfront.net/4283cd53-d901-44d5-a15b-9a0c540844b3.jpeg',
        price: 6.83
      },
      {
        id: '1003',
        name: 'A La Carte Drum',
        description:
          '1 Drum piece of our freshly prepared chicken, available in Original Recipe or Extra Crispy.',
        image:
          'https://d1ralsognjng37.cloudfront.net/0c6cde09-388f-408f-8d78-ee91bfb770cc.jpeg',
        price: 5.39
      },
      {
        id: '1004',
        name: '8 pc. Family Bucket Meal',
        description:
          'Feeds 3-4. 8 pieces of our freshly prepared World Famous Chicken, available in Original Recipe or Extra Crispy, 2 large sides of your choice, and 4 biscuits.',
        image:
          'https://d1ralsognjng37.cloudfront.net/b5c6434d-4675-4e2a-ba11-4d04147c3d65.jpeg',
        price: 35.39
      },
      {
        id: '1005',
        name: '12pc Meal with FREE Beverage Bucket',
        description:
          'Feeds 5-6. 12 pieces of our freshly prepared World Famous Chicken, available in Original Recipe or Extra Crispy, 3 large sides of your choice, and 6 biscuits. Now includes a FREE Beverage Bucket for a limited time only! Available through September 11th at participating locations with purchase of 12 pc and 16 pc meals, while supplies last. Customer responsible for taxes and fees.',
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/654bf7e2295158fe1eda611a16589189/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        price: 47.03
      }
    ]
  }
]
