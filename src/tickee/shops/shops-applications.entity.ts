import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";


@Entity()
export class tp_shops_applications extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 32, nullable: false })
  shop_name: string;


  @Column({ type: 'tinyint', width: 1, unsigned: true, nullable: true })
  shop_type: number;

  @Column({ type: 'tinyint', width: 3, unsigned: true, nullable: true })
  shop_category: number;

  @Column({ length: 64, nullable: true })
  shop_category_other_text: string;

  @Column({ length: 128, nullable: true })
  shop_pic: string;

  @Column({ length: 512, nullable: true })
  shop_details: string;

  @Column({ length: 32, nullable: true })
  shop_owner_firstname: string;

  @Column({ length: 32, nullable: true })
  shop_owner_lastname: string;

  @Column({ length: 64, nullable: true })
  shop_owner_email: string;

  @Column({ type: 'tinyint', width: 1, unsigned: true, nullable: true })
  shop_email_verify: number;

  @Column({ length: 32, nullable: true })
  shop_owner_tel: string;

  @Column({ length: 13, nullable: true })
  shop_owner_cid: string;

  @Column({ length: 48, nullable: true })
  shop_lat_long: string;

  @Column({ type: 'tinyint', width: 3, unsigned: true, nullable: true })
  members_permission_type: number;

  @Column({ length: 64, nullable: true })
  admin_username: string;

  @Column({ length: 64, nullable: true })
  admin_password: string;

  @CreateDateColumn()
  shop_apply_date: Date;

  @Column({ type: 'tinyint', width: 2, nullable: true })
  application_status: number;

  @Column({ length: 128, nullable: true })
  remark: string;

  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date

  @Column({ type: 'int', width: 8, nullable: true })
  shop_amphure_id: number;

  @Column({ type: 'int', width: 8, nullable: true })
  shop_province_id: number;

}