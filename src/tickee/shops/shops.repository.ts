
import { Repository, EntityRepository, Brackets } from "typeorm";
import { tp_shops } from "./shops.entity";



@EntityRepository(tp_shops)
export class ShopsRepository extends Repository<tp_shops>{


}