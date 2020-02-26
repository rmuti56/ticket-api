import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  ManyToMany,
} from "typeorm";
import { tp_shops } from "../shops/shops.entity";


@Entity()
@Unique(["sid", "username"])
export class tp_shops_operators extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  oid: number;

  @ManyToOne(type => tp_shops, { onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: false })
  @JoinColumn({
    name: "sid"
  })
  sid: tp_shops;


  @Column({ length: 16, nullable: false })
  username: string;

  @Column({ length: 64, nullable: false })
  password: string;

  @CreateDateColumn()
  created: Date;


  @Column({ type: 'tinyint', width: 3, nullable: true })
  level: number;

  @Column({ length: 128, nullable: true })
  otp: string;

  @Column({ length: 64, nullable: true })
  token_time: string;

  @Column({ length: 128, nullable: true })
  remark: string;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  op_status: number;


  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date

  @Column({ length: 128, nullable: true })
  player_id: string;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  sms_readed: number;

}