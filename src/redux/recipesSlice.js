import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const recipesInitialState = [
  {
    id: '1',
    name: 'Borsch',
    time: 120,
    servings: 6,
    calories: 160,
    image: 'https://babasown.ca/wp-content/uploads/2021/03/Borshch2.jpg',
    difficulty: 'medium',
    favorite: false,
    ingredients:
      'Meat (chicken I) - 1 kg; Potatoes - 300 g; Cabbage - 300 g; Beetroot - 500 g; Carrot - 200 g; Onions - 100 g; Tomato Paste - 3 tablespoons; Sour cream - 50g; Garlic - 3 cloves; Sugar - 20g Vinegar - 20 g; Bay leaf; salt; pepper; Oil;',
    instructions:
      'Prepare the broth first. Put meat into the saucepan with 3-4 liters of water and boil it for two hours. Take meat out of the saucepan and cut it into pieces or dice. Put them into the broth. Cut potatoes into dice and boil broth. Put potatoes into boiling borsch, season with salt. Grate carrot and stew in oil for 10 minutes. Put  into boiling borsch. Grate beets. Stew pan with tomato sauce and sour cream. Add a little sugar, salt and vinegar. Cabbage finely chop. Add cabbage in a few minutes and boil for about 10 minutes. Add beetroot mixed with tomato paste and boil for another 10 minutes. Add bay leaf, minced garlic, pepper. Remove from heat, wait for 15-20 minutes and serve borscht with cream sour. Смачного.',
  },
  {
    id: '2',
    name: 'Vareniki with Cheese',
    time: 90,
    servings: 6,
    calories: 40,
    image:
      'https://flavorfulhome.com/wp-content/uploads/2021/12/Russian-potato-dumplings-12.jpg',
    difficulty: 'medium',
    favorite: false,
    ingredients:
      "Vareniki dough: 4 cups flour plus ¼ cup extra flour for kneading, 1 teaspoon salt, 1 egg, 1 tablespoon oil, 1 cup lukewarm water. Farmer's Cheese Filling: 2 lbs /1kg Farmer's Cheese or Tvorog, 2 eggs, ½ teaspoon salt.",
    instructions:
      "Mix the flour and salt, place into a bowl and make a well in the centre. Crack the egg and add oil into the flour. Using a fork, stir into the flour. Slowly add the water while kneading, until the dough forms a sticky ball. Continue to knead the dough on a floured surface until dough is soft but not sticky. Knead the dough for about 5 minutes. Cover the dough with a bowl and allow to rest for about an hour. If you're in a hurry you can use after 30 minutes of rest, but an hour is best. While the dough is resting, prepare the Farmer's Cheese filling. In a bowl, mix together Farmer's Cheese, eggs and salt until combined. Roll out the dough about ⅛ thin on a lightly floured surface. Using a 3 cookie cutter, cut out circles. Re-mix, roll out and reuse the extra dough to make more circles. Cover the dough that you aren't using so it doesn't dry out. Place a spoonful of filling in the centre of the circle. Carefully fold in half and pinch to seal the Varenik shut. Careful not to have the filling touching the edges, or it will unseal in the water. Place the Vareniki on a tray and freeze for at least 30 minutes. Place the individually frozen Vareniki into a Ziplock bag for an easy dinner later. Bring a large pot of salted water to a boil. Place the Vareniki into the water and boil until they float to the top, about 5-7 minutes. Frozen Vareniki will take longer. Serve tossed in butter and sour cream.",
  },
  {
    id: '3',
    name: 'Smoked salmon burger',
    time: 20,
    servings: 6,
    calories: 210,
    image:
      'https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg',
    difficulty: 'easy',
    favorite: false,
    ingredients:
      'Salmon Fillets, Mayo (this acts as the binder and keeps the patties together),Dijon Mustard Dill (I love fresh, but dried works well too), Chives, Salt and Pepper, Paprika, Garlic Powder',
    instructions:
      'Start by prepping the cedar planks. Soak your planks in water for at least 30 minutes (up to 2 hours) and set your smoker, charcoal, or gas grill for an indirect medium heat of about 275-300 F. If you choose to omit the cedar plank, the burgers are still really delicious. Try placing them in a cast-iron skillet over the grill as an alternative method for grilling. To make the burger patties, remove the skin from the fillets. Slice the fillet into pieces and place it in a food processor with mayo, mustard, and fresh herbs and spices. Pulse until it forms a paste and place in a bowl. Divide the mixture to create 4 equal-sized patties about one inch thick. Place two patties on a plank and place the plank onto indirect heat on the grill then close the lid. Smoke the salmon using indirect heat for about 25-30 minutes (will vary depending on the size but they should reach an internal temperature of 145 F per FDA food safety regulations). Remove the salmon burgers from the smoker and assemble the burgers with toppings.',
  },
  {
    id: '4',
    name: 'Tomatoes With Creamy Feta',
    time: 15,
    servings: 3,
    calories: 600,
    image:
      'https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2580%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg',
    difficulty: 'medium',
    favorite: false,
    ingredients:
      'Cherry tomatoes: Any variety or colour will work here so grab the most local and ripest you can find. Feta: I prefer to use Sheep’s milk feta but a mix of sheep and goat milk feta is great too. Make sure to use a block, not crumbles which are dry and have preservatives. Full-fat Greek Yogurt or sour cream: A bit of yogurt or sour cream adds some heft to the dip and helps make it a little softer and creamier. I like to use yogurt which adds some lovely tangy flavour. Just make sure to use a thick yogurt so the dip isn’t too runny. Honey: The cherry tomatoes roast with a drizzle of honey to intensify their sweetness. Herbs: Not essential, but fresh herbs infuse more flavour into the roasted tomatoes. Here I use oregano and thyme. Lemon zest and juice: Again, not essential but adds brightness and a touch of acidity to the whipped feta. Extra virgin olive oil: For roasting the cherry tomatoes and drizzling over the finished dish. Salt and pepper: To season the cherry tomatoes. Flaky salt: Optional, but a bit of flaky salt sprinkled over the finished adds a pop of flavour.',
    instructions:
      'Preheat the oven: Preheat the oven to 425°F and place a rack 10 inches from the broiler. Make the dip: While the oven is preheating add the feta cheese, yogurt, and lemon zest to a food processor. Blend until smooth, about 3 to 4 minutes, scraping down the sides of the processor bowl as necessary. Spread mixture on a large shallow serving plate and place in refrigerator to chill for at least 30 minutes. Roast the tomatoes: Place the cherry tomatoes, sliced garlic, and herbs in a small baking dish or oven-proof skillet. Drizzle with olive oil, season with salt and pepper and toss to combine. Roast for about 20 or until tomatoes are soft and begin to burst. Switch the oven to broil and broil until tomatoes start to blister and char, about 5 minutes. Finish and serve: Top chilled whipped feta with the warm roasted cherry tomatoes and all the juices. Drizzle with extra virgin olive oil and flaky salt, if using. Serve immediately with toasted baguette slices, if desired.',
  },
  {
    id: '5',
    name: 'Spicy potato salad',
    time: 30,
    servings: 2,
    calories: 320,
    image:
      'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2580%2Cc_limit/0701-tj-recipe-potato-v2.jpg',
    difficulty: 'medium',
    favorite: false,
    ingredients:
      '4 large round red potatoes(about 2 pounds), ⅓ cup vegetable oil, ¼ cup white vinegar, 1 tablespoon sugar, 1½ teaspoons chili powder, 1 teaspoon seasoned salt, ⅛ teaspoon hot sauce, 1 (8 3/4-ounce) can whole kernel corn, drained, 1 small carrot, shredded, 1 (2.5-ounce) can sliced ripe olives, 4 green onions, sliced',
    instructions:
      'Cook red potatoes in boiling water to cover 20 to 30 minutes or until tender. Drain and cool to touch. Cut potatoes into cubes; place in a large bowl. Whisk together oil and next 5 ingredients; pour over potato, tossing gently. Cover and chill 1 hour. Stir in corn and next 3 ingredients.',
  },
  {
    id: '6',
    name: 'Chicken Biryani',
    time: 40,
    servings: 4,
    calories: 700,
    image:
      'https://assets.bonappetit.com/photos/5db1b689823b960008d8468d/1:1/w_2580%2Cc_limit/Chicken-Biryani-Lede-NEW.jpg',
    difficulty: 'hard',
    favorite: false,
    ingredients:
      '4 tablespoons vegetable oil, divided, 4 small potatoes, peeled and halved, 2 large onions, finely chopped, 2 cloves garlic, minced, 1 tablespoon minced fresh ginger root, 2 medium tomatoes, peeled and chopped, 1 teaspoon salt, 1 teaspoon ground cumin, ½ teaspoon chili powder, ½ teaspoon ground black pepper, ½ teaspoon ground turmeric, 2 tablespoons plain yogurt, 2 tablespoons chopped fresh mint leaves, ½ teaspoon ground cardamom, 1 (2 inch) piece cinnamon stick, 3 pounds boneless, skinless chicken pieces cut into chunks. Rice: 1 pound basmati rice, 2 ½ tablespoons vegetable oil, 1 large onion, diced, 5 pods cardamom, 3 whole cloves, 1 (1 inch) piece cinnamon stick, ½ teaspoon ground ginger, 1 pinch powdered saffron, 4 cups chicken stock, 1 ½ teaspoons salt.',
    instructions:
      'Heat 2 tablespoons of oil in a large skillet. Fry potatoes in hot oil until lightly browned, about 3 to 5 minutes. Remove to a paper towel-lined plate to drain; set aside. Add remaining 2 tablespoons of oil to the skillet. Add onions, garlic, and fresh ginger; cook and stir until onion is soft and golden. Add tomatoes, salt, cumin, chili powder, pepper, and turmeric; cook, stirring constantly, for 5 minutes. Stir in yogurt, mint, ground cardamom, and cinnamon stick. Cover and cook over low heat, stirring occasionally, until tomatoes are cooked to a pulp. It may be necessary to add a little hot water if mixture becomes too dry and starts to stick to the pan. Add chicken and stir well to coat. Cover and cook over very low heat until chicken is tender, 35 to 45 minutes. There should only be a little very thick gravy left when chicken is finished cooking. If necessary cook uncovered for a few minutes to reduce the gravy. Meanwhile, make the rice: Wash rice well and drain in a colander for at least 30 minutes. Heat oil in a large skillet. Add onion; cook and stir until golden. Add cardamom pods, cloves, cinnamon stick, ground ginger, and saffron; stir in rice until coated with spices. Heat stock and salt in a medium pot until hot; pour over rice and stir well. Add chicken mixture and potatoes; stir gently to combine. Bring to a boil. Reduce heat to very low, cover with a tight-fitting lid, and steam for 20 minutes without lifting the lid or stirring. Spoon biryani onto a warm serving dish.',
  },
];

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: recipesInitialState,
  },
  reducers: {
    addRecipe: {
      reducer(state, action) {
        state.recipes.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            ...text,
          },
        };
      },
    },
    deleteRecipe(state, action) {
      state.recipes = state.recipes.filter(
        recipe => recipe.id !== action.payload
      );
    },
    addFavorite(state, action) {
      for (const recipe of state.recipes) {
        if (recipe.id === action.payload) {
          recipe.favorite = !recipe.favorite;
          break;
        }
      }
    },
  },
});

const persistConfig = {
  key: 'recipes',
  version: 1,
  storage,
};

export const { addRecipe, deleteRecipe, addFavorite } = recipesSlice.actions;
export const recipesReducer = persistReducer(
  persistConfig,
  recipesSlice.reducer
);
