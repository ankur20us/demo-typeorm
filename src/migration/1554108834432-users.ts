import {MigrationInterface, QueryRunner} from "typeorm";

// tslint:disable-next-line: class-name
export class users1554108834432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        console.log("i am mig");
        return null;
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
