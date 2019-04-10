import {Column, Entity, Generated, PrimaryGeneratedColumn} from "typeorm";


/**
 * This class has a mapping to the db table "user" and have the following columns.
 */
@Entity({name: "user"})
export class User {

    @PrimaryGeneratedColumn()
    @Generated("uuid")
    public id: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public age: number;

}
