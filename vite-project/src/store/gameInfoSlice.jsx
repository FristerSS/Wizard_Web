import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, child, get, getDatabase, set } from 'firebase/database';
import database from "../firebase/firebase";

const createAttribute = (name, value) =>
{
  if(!name || !value)
    return 

  return {
    name,
    value
  }
}


const initialState = {
  skills: [
    { name: 'Regeneration', content: 'Regeneration 20% of max health. Exhaust: 1s. Cost: 50 Energy.', img: './src/img/skills/regeneration.png', nameColor: 'green' },
    { name: 'Thunder', content: 'Thunder damage: 230. Exhaust: 5.5s. Cost: 250 Energy. Range: 340.', img: './src/img/skills/thunder.png', nameColor: 'blue' },
    { name: 'Fireball', content: 'Fireball damage: 600. Exhaust: 7s. Cost: 6% of Max Energy. Range: 180. Shots: 4', img: './src/img/skills/fireball.png', nameColor: 'orange' },
    { name: 'Ice', content: 'Ice attack damage 40. Exhaust: 4s. Cost: 100 Energy. Shots: 15.', img: './src/img/skills/ice.png', nameColor: 'cyan' },
    { name: 'Electro Hand', content: 'Electro hand attack 2x of weapon damage. Exhaust: 2s. Cost 250 energy. Range: 300.', img: './src/img/skills/electro_hand.png', nameColor: 'blue' },
    { name: 'Energy Shield', content: 'Converts magic damage into energy. Duration: 30s. Exhaust: 30s. Cost 40 gold in upgrade panel.', img: './src/img/skills/energy_shield.png', nameColor: 'blue' },
  ],
  items: [
    { name: 'Silver Hat', type: 'hat', content: 'This is Silver Hat.', img: './src/img/items/silver_hat.png', attributes: [createAttribute('Power', '+15%'), createAttribute('Energy', '+400')]},
    { name: 'Gold Hat', type: 'hat', content: 'This is Gold Hat.', img: './src/img/items/gold_hat.png', attributes: [createAttribute('Power', '+45%'), createAttribute('Energy', '+600'), createAttribute('Energy Regeneration', '+10/s')]},
    { name: 'Luxury Hat', type: 'hat', content: 'This is Luxury Hat.', img: './src/img/items/luxury_hat.png', attributes: [createAttribute('Power', '+25%'), createAttribute('Energy', '+900'), createAttribute('Energy Regeneration', '+25/s')]},
    { name: 'Death Hat', type: 'hat', content: 'This is Death Hatt.', img: './src/img/items/death_hat.png', attributes: [createAttribute('Power', '+60%'), createAttribute('Energy', '+500'), createAttribute('Energy Regeneration', '+50/s')]},
    
    { name: 'Magic Suit', type: 'armor', content: 'This is Magic Suit. Cost 100 gold in upgrade panel.', img: './src/img/items/magic_suit.png', attributes: [createAttribute('Def', '+30'), createAttribute('Energy Regeneration', '+10/s')]},
    { name: 'Magic Fire Suit', type: 'armor', content: 'This is Magic Fire Suit. Cost 250 gold in upgrade panel.', img: './src/img/items/magic_fire_suit.png', attributes: [createAttribute('Def', '+100'), createAttribute('Health', '+300'), createAttribute('Energy', '+450'), createAttribute('Energy Regeneration', '+18/s')]},
    { name: 'Magic Gold Suit', type: 'armor', content: 'This is Magic Gold Suit. Cost 500 gold in upgrade panel.', img: './src/img/items/magic_gold_suit.png', attributes: [createAttribute('Def', '+250'), createAttribute('Health', '+400'), createAttribute('Energy', '+1000'), createAttribute('Energy Regeneration', '+28/s')]},
    { name: 'Death Armor', type: 'armor', content: 'This is Death Armor.', img: './src/img/items/death_armor.png', attributes: [createAttribute('Def', '+500'), createAttribute('Health', '+600'), createAttribute('Energy', '+1300'), createAttribute('Energy Regeneration', '+50/s'), createAttribute('Power', '+10%')]},
    
    { name: 'Leather Boots', type: 'boots', content: 'This is Leather Boots. Cost 70 gold in upgrade panel.', img: './src/img/items/leather_boots.png', attributes: [createAttribute('Speed', '+15')]},
    { name: 'Silver Boots', type: 'boots', content: 'This is Silver Boots.', img: './src/img/items/silver_boots.png', attributes: [createAttribute('Speed', '+25'), createAttribute('Energy', '+200'), createAttribute('Energy Regeneration', '+15/s')]},
    { name: 'Golden Boots', type: 'boots', content: 'This is Golden Boots.', img: './src/img/items/golden_boots.png', attributes: [createAttribute('Speed', '+55'), createAttribute('Def', '+100'), createAttribute('Energy', '+500'), createAttribute('Energy Regeneration', '+40/s')]},
    { name: 'Luxury Boots', type: 'boots', content: 'This is Luxury Boots.', img: './src/img/items/luxury_boots.png', attributes: [createAttribute('Speed', '+65'), createAttribute('Def', '+40'), createAttribute('Energy', '+1000'), createAttribute('Energy Regeneration', '+25/s')]},
    { name: 'Death Boots', type: 'boots', content: 'This is Death Boots.', img: './src/img/items/death_boots.png', attributes: [createAttribute('Speed', '+45'), createAttribute('Def', '+80'), createAttribute('Energy', '+1000'), createAttribute('Energy Regeneration', '+50/s')]},
    
    { name: 'Cherry Candy', type: 'candy', content: 'This is Cherry Candy. Duration: 20s.', img: './src/img/candy/cherry_candy.png', attributes: [createAttribute('Speed', '+10'), createAttribute('Power', '+15%'), createAttribute('Energy Regeneration', '+50/s')]},
    { name: 'Luxury Candy', type: 'candy', content: 'This is Luxury Candy. Duration: 60s.', img: './src/img/candy/luxury_candy.png', attributes: [createAttribute('Speed', '+10'), createAttribute('Energy', '+600'), createAttribute('Energy Regeneration', '+55/s')]},
    { name: 'Delicious Candy', type: 'candy', content: 'This is Delicious Candy. Duration: 20s.', img: './src/img/candy/delicious_candy.png', attributes: [createAttribute('Power', '+100%')]},
  
    { name: 'Holy Wand', type: 'weapon', content: 'Holy Wand. Damage 50.', img: './src/img/weapons/holy_wand.png', attributes: []},
    { name: 'Energy Wand', type: 'weapon', content: 'Energy Wand. Damage 100. Cost 60 gold in upgrade panel.', img: './src/img/weapons/energy_wand.png', attributes: []},
    { name: 'Fire Wand', type: 'weapon', content: 'Fire Wand. Damage 250. Cost 300 gold in upgrade panel.', img: './src/img/weapons/fire_wand.png', attributes: []},
    { name: 'Ice Wand', type: 'weapon', content: 'Ice Wand. Damage 500. Drop: White Dino', img: './src/img/weapons/ice_wand.png', attributes: []},
  
    { name: 'Energy Regeneration Gem 1', type: 'gem', content: 'This is Energy Regeneration Gem 1. Cost 50 gold in upgrade panel.', img: './src/img/gems/energy_regeneration_increase_gem_1.png', attributes: [createAttribute('Energy Regeneration', '+50/s')]},
    { name: 'Energy Gem 1', type: 'gem', content: 'This is Energy Gem 1. Cost 100 gold in upgrade panel.', img: './src/img/gems/energy_increase_gem_1.png', attributes: [createAttribute('Energy', '+1200')]},
    { name: 'Energy Gem 2', type: 'gem', content: 'This is Energy Gem 2. Cost 250 gold in upgrade panel.', img: './src/img/gems/energy_increase_gem_2.png', attributes: [createAttribute('Energy', '+2350')]},
    { name: 'Health Gem 1', type: 'gem', content: 'This is Health Gem 1. Cost 70 gold in upgrade panel.', img: './src/img/gems/health_increase_gem_1.png', attributes: [createAttribute('Health', '+350')]},
    { name: 'Health Gem 2', type: 'gem', content: 'This is Health Gem 2. Cost 150 gold in upgrade panel.', img: './src/img/gems/health_increase_gem_2.png', attributes: [createAttribute('Health', '+750')]},
    { name: 'Power Gem 1', type: 'gem', content: 'This is Power Gem 1. Cost 150 gold in upgrade panel.', img: './src/img/gems/power_increase_gem_1.png', attributes: [createAttribute('Power', '+60%')]},
  ],
  enemies: [
    { name: 'Green Dino', health: 350, speed: 55, gold: 1, score: 30, damage: 65, content: 'This is Green Dino.', img: './src/img/enemy_sprites/green_dino.png', color:'green', items: [
      {
          name: 'Cherry Candy',
          src: './src/img/candy/cherry_candy.png'
      },
      ] 
    },
    { name: 'Yellow Dino', health: 900, speed: 65, gold: 2, score: 80, damage: 115, content: 'This is Yellow Dino.', img: './src/img/enemy_sprites/yellow_dino.png', color:'yellow', items: [
      {
          name: 'Cherry Candy',
          src: './src/img/candy/cherry_candy.png'
      },
      {
        name: 'Luxury Candy',
        src: './src/img/candy/Luxury_candy.png'
      },
      {
        name: 'Silver Boots',
        src: './src/img/items/silver_boots.png'
      },
      ] 
    },
   { name: 'Red Dino', health: 1900, speed: 75, gold: 4, score: 220, damage: 400, content: 'This is Red Dino.', img: './src/img/enemy_sprites/red_dino.png', color:'red', items: [
      {
          name: 'Cherry Candy',
          src: './src/img/candy/cherry_candy.png'
      },
      {
        name: 'Luxury Candy',
        src: './src/img/candy/luxury_candy.png'
      },
      {
        name: 'Delicious Candy',
        src: './src/img/candy/delicious_candy.png'
      },
      {
        name: 'Silver Boots',
        src: './src/img/items/silver_boots.png'
      },
      {
        name: 'Gold Hat',
        src: './src/img/items/gold_hat.png'
      },
      {
        name: 'Luxury Hat',
        src: './src/img/items/luxury_hat.png'
      },
      {
        name: 'Golden Boots',
        src: './src/img/items/golden_boots.png'
      },
      {
        name: 'Luxury Boots',
        src: './src/img/items/luxury_boots.png'
      },
      ]  
    },
    { name: 'Blue Dino', health: 3200, speed: 81, gold: 6, score: 420, damage: 650, content: 'This is Blue Dino.', img: './src/img/enemy_sprites/blue_dino.png', color:'blue', items: [
      {
        name: 'Cherry Candy',
        src: './src/img/candy/cherry_candy.png'
      },
      {
        name: 'Luxury Candy',
        src: './src/img/candy/luxury_candy.png'
      },
      {
        name: 'Delicious Candy',
        src: './src/img/candy/delicious_candy.png'
      },
      {
        name: 'Gold Hat',
        src: './src/img/items/gold_hat.png'
      },
      {
        name: 'Luxury Hat',
        src: './src/img/items/luxury_hat.png'
      },
      {
        name: 'Golden Boots',
        src: './src/img/items/golden_boots.png'
      },
      {
        name: 'Luxury Boots',
        src: './src/img/items/luxury_boots.png'
      },
      {
        name: 'Death Boots',
        src: './src/img/items/death_boots.png'
      },
      {
        name: 'Death Armor',
        src: './src/img/items/death_armor.png'
      },
      {
        name: 'Death Hat',
        src: './src/img/items/death_hat.png'
      },
      ]  
    },
    { name: 'Purple Dino', health: 6100, speed: 95, gold: 8, score: 1000, damage: 1050, content: 'This is Purple Dino.', img: './src/img/enemy_sprites/purple_dino.png', color:'purple', items: [
      {
        name: 'Cherry Candy',
        src: './src/img/candy/cherry_candy.png'
      },
      {
        name: 'Luxury Candy',
        src: './src/img/candy/luxury_candy.png'
      },
      {
        name: 'Delicious Candy',
        src: './src/img/candy/delicious_candy.png'
      },
      {
        name: 'Gold Hat',
        src: './src/img/items/gold_hat.png'
      },
      {
        name: 'Luxury Hat',
        src: './src/img/items/luxury_hat.png'
      },
      {
        name: 'Golden Boots',
        src: './src/img/items/golden_boots.png'
      },
      {
        name: 'Luxury Boots',
        src: './src/img/items/luxury_boots.png'
      },
      {
        name: 'Death Boots',
        src: './src/img/items/death_boots.png'
      },
      {
        name: 'Death Armor',
        src: './src/img/items/death_armor.png'
      },
      {
        name: 'Death Hat',
        src: './src/img/items/death_hat.png'
      },
      ] 
    },
    { name: 'White Dino', health: 11000, speed: 1.1, gold: 20, score: 1800, damage: 1700, content: 'This is White Dino.', img: './src/img/enemy_sprites/white_dino.png', color:'white', items: [
      {
        name: 'Cherry Candy',
        src: './src/img/candy/cherry_candy.png'
      },
      {
        name: 'Delicious Candy',
        src: './src/img/candy/delicious_candy.png'
      },
      {
        name: 'Luxury Candy',
        src: './src/img/candy/luxury_candy.png'
      },
      {
        name: 'Silver Boots',
        src: './src/img/items/silver_boots.png'
      },
      {
        name: 'Gold Hat',
        src: './src/img/items/gold_hat.png'
      },
      {
        name: 'Luxury Hat',
        src: './src/img/items/luxury_hat.png'
      },
      {
        name: 'Golden Boots',
        src: './src/img/items/golden_boots.png'
      },
      {
        name: 'Luxury Boots',
        src: './src/img/items/luxury_boots.png'
      },
      {
        name: 'Death Boots',
        src: './src/img/items/death_boots.png'
      },
      {
        name: 'Death Armor',
        src: './src/img/items/death_armor.png'
      },
      {
        name: 'Death Hat',
        src: './src/img/items/death_hat.png'
      },
      ] 
    },
  ],
  helpers: [{
    name: 'Snow', damage: 50, content: 'For player: start, 15-lvl, 30-lvl and 45-lvl.', img: './src/img/helpers/snow.png', color: 'white'
  },
  {
    name: 'Fire', damage: 50, content: 'For Fire Wizard', img: './src/img/helpers/fire.png', color: 'orange'
  },
  {
    name: 'Electro', damage: 50, content: 'For Thunder Wizard', img: './src/img/helpers/Electro.png', color: 'blue'
  },
  ],
  wizards: [{
    name: 'White', content: 'White Wizard (Player)', img: './src/img/wizards/white.png', color: 'white', levelUp: [createAttribute('Health', '+20'), createAttribute('Energy', '+40'), createAttribute('Energy Regeneration', '+3/s'), createAttribute('Power', '+4%')]
  },
  {
    name: 'Fire', content: 'Fire Wizard', img: './src/img/wizards/fire.png', color: 'orange', levelUp: [createAttribute('Health', '+20'), createAttribute('Energy', '+40'), createAttribute('Energy Regeneration', '+5/s'), createAttribute('Power', '+8%'), createAttribute('Def', '1.5')]
  },
  {
    name: 'Thunder', content: 'Thunder Wizard', img: './src/img/wizards/thunder.png', color: 'blue', levelUp: [createAttribute('Health', '+15'), createAttribute('Energy', '+55'), createAttribute('Energy Regeneration', '+9/s'), createAttribute('Power', '+4%'), createAttribute('Def', '1')]
  },
  ]
}

// const getItems = createAsyncThunk('items/getItems', async () => {
//   const dbRef = ref(getDatabase());
//   const data = await get(child(dbRef, 'items/')).then((sn) => {
//     let data = [];

//     if (sn.exists()) {

//       data.push(sn.val());

//     } else {
//       console.log('No data available');
//     }

//     return data;
//   })
//     .catch((err) => {
//       console.log(err);
//       return false;
//     });

//   return data;
// });

const gameInfoSlice = createSlice({
  name: 'gameInfo',
  initialState: initialState,
  reducers: {
    addSkill: (state, action) => {
      if (!action.payload?.name || !action.payload?.content || !action.payload?.img || !action.payload?.nameColor) {

        console.log('Missing required fields in addSkill payload');
        return;
      }

      set(ref(database, 'skills/' + action.payload.name), {
        name: action.payload.name,
        content: action.payload.content,
        img: action.payload.img,
        nameColor: action.payload.nameColor
      });

      console.log(action.payload);
    },
    addItems: (state, action) => {
      if (!action.payload?.name || !action.payload?.content || !action.payload?.img || !action.payload?.type) {

        console.log('Missing required fields in addItems payload');
        return;
      }

      set(ref(database, 'items/' + action.payload.name), {
        name: action.payload.name,
        content: action.payload.content,
        img: action.payload.img,
        type: action.payload.type
      });

      console.log(action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getItems.fulfilled, (state, action) => {
  //     console.log(action.payload);
  //     return action.payload
  //   });
  // }
});

export const gameInfoActions= gameInfoSlice.actions;
export default gameInfoSlice.reducer;

// export {getItems}
