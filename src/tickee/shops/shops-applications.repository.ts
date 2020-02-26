
import { Repository, EntityRepository, Brackets } from "typeorm";
import { tp_shops_applications } from "./shops-applications.entity";



@EntityRepository(tp_shops_applications)
export class ShopsApplicationsRepository extends Repository<tp_shops_applications>{


}