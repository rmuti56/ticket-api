import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn
} from "typeorm";


@Entity()
export class tp_shops_category extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'smallint' })
  cat_id: number;

  @Column({ length: 32, nullable: true })
  cat_name: string;


  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date

}