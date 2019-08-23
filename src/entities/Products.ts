import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { Length } from "class-validator";

@Entity()
@Unique(["name"])
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 20)
    name: string;

    @Column()
    @Length(4, 100)
    description: string;

    @Column()
    cost: number
}