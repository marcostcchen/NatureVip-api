import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: "Ola" })
export class CreateUserType {
    @Field() name: string;
    @Field() age: string;
}
