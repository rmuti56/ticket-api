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
import { tp_shops } from "../shops/shops.entity";
import { tp_members } from "../customer/customer.entity";


@Entity()

export class tp_shops_chats extends BaseEntity {

  @PrimaryGeneratedColumn()
  chat_id: Number

  @Index()
  @ManyToOne(type => tp_shops, { onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true })
  @JoinColumn({
    name: "sid"
  })
  shop_id: tp_shops;

  @Column({ type: 'int', width: 10, nullable: true })
  oid: number;

  @Index()
  @Column({ type: 'int', width: 10, nullable: true })
  mid: number;

  @Column({ type: 'text', nullable: true })
  text: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  img: string;

  @Column({ type: 'int', width: 5, nullable: true })
  img_w: number;

  @Column({ type: 'int', width: 5, nullable: true })
  img_h: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  oid_readed: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  mid_readed: string;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  readed: number;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  status: number;

  @Column({ type: 'int', width: 8, nullable: true })
  coupon_id: number;

  @Column({ type: 'tinyint', width: 3, nullable: true })
  resend_coupon_auto: number;

  @Column({ type: 'text', nullable: true })
  chat_image_path: string;

  @Column({ type: 'varchar', nullable: true })
  chat_image_name: string;


  @CreateDateColumn({ type: 'timestamp' })
  create: Date

  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date

}