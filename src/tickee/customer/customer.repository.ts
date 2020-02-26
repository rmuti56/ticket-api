
import { Repository, EntityRepository, Brackets } from "typeorm";
import { tp_members } from "./customer.entity";



@EntityRepository(tp_members)
export class CustomerRepository extends Repository<tp_members>{



}