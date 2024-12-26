import Card  from "../models/card";

export const CARDS =[
    new Card ( 'c1','Coffee', '2x1 the all day', '/MealsApp/assets/favicon.png',{en2: require(`/MealsApp/assets/backgroundImage/coffee-02_640x480.png`)}),
    new Card ( 'c2','Travel', '50% discount', '/MealsApp/assets/favicon.png', {en2: require(`/MealsApp/assets/backgroundImage/camp-01_640x480.png`)}),
    new Card ( 'c3','Travel', '25% discount in the second trip','/MealsApp/assets/favicon.png',{en2: require(`/MealsApp/assets/backgroundImage/landscape-01_640x480.png`)}),
    new Card ( 'c4','Summer', '50% get two cocosnus', '/MealsApp/assets/favicon.png',{en2: require('/MealsApp/assets/backgroundImage/summer-01_640x480.png')}),
]