const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
  },
  
  //getter methods
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.deserts;
  },
  
  //setter methods
  set appetizers(food){
    this._courses.appetizers = food;
  },
  set mains(food){
    this._courses.mains = food;
  },
  set desserts(food){
    this._courses.deserts = food;
  },
  
  //returns full courses from dishes
  get courses(){
    return {
      appetizers : this.appetizers,
      mains : this.mains,
      desserts: this.deserts
    };
  },
  
  addDishtoCourse(courseName, dishName, dishPrice) {
     const dish = {
      name : dishName,
      price : dishPrice
    }
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;

    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name} and the price is $${totalPrice}`;
  } 
};

menu.addDishtoCourse('appetizers', 'Caesars Salad', 26);
menu.addDishtoCourse('mains', 'Swiss Melt Burger', 60);
menu.addDishtoCourse('desserts', 'Fudds Volcano', 36);

const meal = menu.generateRandomMeal();
console.log(meal);
