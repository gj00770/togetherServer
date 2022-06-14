import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class SellerInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sellerName: string;

  @Column()
  owner: number;

  @Column()
  resisterNum: number;

  @Column()
  phoneNumber: string;

  @Column()
  mailOrderReport: string;

  @Column()
  address: string;

}