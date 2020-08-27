import { Resolver, Query, ObjectType, Field } from "type-graphql";
import "reflect-metadata";

@Resolver()
export class TestResolver {
  @Query(() => String)
  hello() {
    return "Hello!";
  }
}
