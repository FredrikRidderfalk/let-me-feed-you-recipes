export const garlicNoodles = {
  name: 'Garlic Noodles',
  recipeImage: '../assets/images/ramen.png',
  star: true,
  description:
    "This might just be our favorite noodle dish of all time. A one-pot dish, super quick to make, no frying, just a bit of boiling, and the flexibility of the dish is on par with fried rice! You could put pretty much anything into the soup, and you can also choose any BBQ sauce of your liking or make one yourself with just 4 ingredients. Also, it's freakishly delicious and addictive.",
  tags: {
    quick: true,
    easy: true,
    temperature: null,
    clean: true,
    cheap: true,
  },
  ingredients: [
    {
      name: 'Noodles',
      amount: 200,
      unit: 'g',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Butter',
      amount: 200,
      unit: 'g',
      flex: 'Neutral vegetable oil.',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Garlic',
      amount: 8,
      unit: 'large cloves',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Light soy sauce',
      amount: 1,
      unit: 'cup',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'MSG',
      amount: 1,
      unit: 'tbsp',
      flex: '',
      optional: true,
      topping: false,
      done: false,
    },
    {
      name: 'Sugar',
      amount: 1,
      unit: 'cup',
      flex: 'White sugar, brown sugar, syrup, mirin.',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Chili flakes',
      amount: 2,
      unit: 'tbsp',
      flex: '',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Rice vinegar',
      amount: 2,
      unit: 'tbsp',
      flex: 'Any vinegar will do just fine.',
      optional: false,
      topping: false,
      done: false,
    },
    {
      name: 'Spring onion',
      amount: 3,
      unit: '',
      flex: 'Other crispy greens',
      optional: false,
      topping: false,
      done: false,
    },
  ],
  instructions: [
    'Bring a pot or pan of water to a boil, then salt the water to your liking and add the noodles.',
    'Slice the cloves of garlic.',
    'Add butter to a wok or pan on medium high heat and fry for 1 minute.',
    'Add soy, sugar, chili flakes, chopped spring onion, MSG, and vinegar. Set the heat to low until the noodles are done.',
    'Add noodles to the sauce, set the heat to high and mix for 1 minute. Serve.',
  ],
  notes: 'MSG is amazing in this dish.',
};
