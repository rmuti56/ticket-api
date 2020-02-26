import { Repository, EntityRepository, Brackets } from "typeorm";
import { tp_shops_category } from "./shops-category.entity";




@EntityRepository(tp_shops_category)
export class ShopsCategoryRepository extends Repository<tp_shops_category>{


}