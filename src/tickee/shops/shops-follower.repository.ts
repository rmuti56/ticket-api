import { Repository, EntityRepository, Brackets } from "typeorm";
import { tp_shops_follower } from "./shops-follower.entity";




@EntityRepository(tp_shops_follower)
export class ShopsFollowerRepository extends Repository<tp_shops_follower>{


}