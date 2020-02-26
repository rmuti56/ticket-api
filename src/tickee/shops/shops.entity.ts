import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";


@Entity()
export class tp_shops extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  sid: number;

  @Column({ type: 'int', width: 10, nullable: false })
  from_app_id: number;

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

  @Column({ type: 'date' })
  shop_apply_date: Date;

  @Column({ type: 'tinyint', width: 2, nullable: true })
  application_status: number;

  @CreateDateColumn({ type: 'datetime' })
  registered: Date;

  @Column({ type: 'datetime', nullable: true })
  expired: Date;

  @Column({ type: 'bit', nullable: true })
  shop_status: number;

  @Column({ type: 'tinyint', width: 3, nullable: true })
  del_status: number;


  @Column({ type: 'int', width: 8, nullable: true })
  update_by: number;

  @Column({ length: 128, nullable: true })
  remark: string;

  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date

  @Column({ type: 'tinyint', width: 3, nullable: true })
  convert_status: number;

  @Column({ type: 'smallint', width: 5, nullable: true })
  convert_unit: number;

  @Column({ type: 'smallint', width: 5, nullable: true })
  convert_point: number;

  @Column({ type: 'int', width: 8, nullable: true })
  shop_amphure_id: number;

  @Column({ type: 'int', width: 8, nullable: true })
  shop_province_id: number;

}