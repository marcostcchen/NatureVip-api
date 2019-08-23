import { Field, ObjectType, Int, Float } from "type-graphql";

@ObjectType({ description: "Object of an Product" })
export class Product {
  @Field()
  name: string;

  @Field({ nullable: true, description: "The description of an product" })
  description?: string;

  @Field(type => Float)
  cost: number;
}