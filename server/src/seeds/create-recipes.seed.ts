import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { Recipe } from "../entities/recipe";

export default class CreateRecipes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log("factory needs to be used", factory);
    await connection
      .createQueryBuilder()
      .insert()
      .into(Recipe)
      .values([
        {
          name: "Austin's Keto Pork",
          description: "Really good pork with no carbs",
          picture: "big bork",
        },
        {
          name: "Alex's lentils",
          description: "lentils with loads of umami",
          picture: "beans;",
        },
        {
          name: "Alan's gels",
          description: "Good for biking long distances",
          picture: "squishy",
        },
        {
          name: "Pete's eats",
          description: "that's a big meatball",
          picture: "beetfuqu",
        },
        {
          name: "Yanna's rice cakes",
          description: "very good for u...",
          picture: "very circular",
        },
        {
          name: "Zarag's famous pasta",
          description: "Rigatoni cooked for 9 minutes and topped with cheese",
          picture: "noobles",
        },
        {
          name: "John's Borgers",
          description: "smash burgers from the sunny south coast of England",
          picture: "JMcD with the beef",
        },
        {
          name: "Thunder Poke",
          description: "rice with fish on top",
          picture: "big fish on big rice",
        },
        {
          name: "Dig Inn Potatoes",
          description: "how do I make these plz",
          picture: "taters",
        },
        {
          name: "Dig Inn Kale",
          description: "roasted kale tossed with a caesar dressing",
          picture: "green and white",
        },
      ])
      .execute();
  }
}
