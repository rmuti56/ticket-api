import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  Index
} from "typeorm";
import { tp_shops } from "./shops.entity";
import { tp_members } from "../customer/customer.entity";


@Entity()
@Index(['sid', 'mid'])
export class tp_shops_members extends BaseEntity {

  @PrimaryColumn()
  @Index()
  @ManyToOne(type => tp_shops, { onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: false, primary: true })
  @JoinColumn({
    name: "sid"
  })
  sid: tp_shops;

  @PrimaryColumn()
  @ManyToOne(type => tp_members, { onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: false, primary: true })
  @JoinColumn({
    name: "mid"
  })
  mid: tp_members;


  @Column({ type: 'tinyint', width: 2, nullable: true })
  member_type: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  otp: string;

  @CreateDateColumn({ type: 'timestamp' })
  registered: Date;

  @Column({ type: 'datetime', nullable: true })
  expired: Date;


  @Column({ type: 'tinyint', width: 1, nullable: true })
  member_status: number;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  notify_status: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  remark: string;

  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date

  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", })
  lastActive: Date

}