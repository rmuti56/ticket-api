import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";


@Entity()
export class tp_members extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  mid: number;

  @Column({ length: 128, nullable: true })
  player_id: string;

  @Column({ length: 10 })
  m_tel_number: string;

  @Column({ length: 255, nullable: true })
  otp: string;

  @Column({ length: 64, nullable: true })
  m_password: string;

  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  m_gender: number;

  @Column({ length: 32, nullable: true })
  m_name: string;

  @Column({ length: 32, nullable: true })
  m_nickname: string;

  @Column({ length: 32, nullable: true })
  m_lastname: string;

  @Column({ length: 64, nullable: true })
  m_mail: string;

  @Column({ type: 'date', length: 0, nullable: true })
  m_birth_date: Date;

  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  flag_changed_birth_date: number;

  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  notify_status: number;

  @Column({ length: 128, nullable: true })
  m_pic: string;

  @Column({ length: 64, nullable: true })
  token_time: string;

  @CreateDateColumn()
  registered: Date

  // @Column({ type: 'timestamp', length: 0 })
  // registered: Date

  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  email_verified: number;

  // @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  // time_stamp: Date
  @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  time_stamp: Date


  @Column({ type: 'int', width: 8, nullable: true })
  id_amphures: number

  @Column({ type: 'int', width: 8, nullable: true })
  id_provinces: number

  @Column({ length: 64, default: 'AT' })
  event_code: string;

  @Column({ length: 64, nullable: true })
  m_blood_type: string;

  @Column({ length: 64, nullable: true })
  m_id_card: string;

  @Column({ length: 64, nullable: true })
  m_size: string;

  @Column({ length: 128, nullable: true })
  m_urgent_name: string;

  @Column({ length: 64, nullable: true })
  m_urgent_tel_number: string;

  @Column({ length: 64, nullable: true })
  m_address_receive: string;

  @Column({ type: 'tinyint', nullable: true })
  m_type_run: number;

  @Column({ type: 'tinyint', nullable: true })
  m_shirts_receive: number;

  @Column({ length: 255, nullable: true })
  m_provinces: string

  // @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)" })
  // createAt: Date;

  // @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  // updateAt: Date;

}