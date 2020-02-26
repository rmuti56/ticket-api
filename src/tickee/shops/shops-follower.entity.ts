import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { tp_shops } from "./shops.entity";
import { tp_members } from "../customer/customer.entity";


@Entity()
@Unique(["sid", "mid"])
export class tp_shops_follower extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'smallint' })
  fid: number;

  @ManyToOne(type => tp_shops, { onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: false })
  @JoinColumn({
    name: "sid"
  })
  sid: tp_shops;

  @ManyToOne(type => tp_members, { onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: false })
  @JoinColumn({
    name: "mid"
  })
  mid: tp_members;


  @Column({ type: 'tinyint', width: 1, nullable: true })
  status: number;


  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date

}