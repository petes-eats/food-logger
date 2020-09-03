import { InputType, Field } from "type-graphql";

@InputType()
export class CreateRecipeInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  picture: string;
}
