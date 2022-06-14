import { Column, Entity, OneToMany, PrimaryGeneratedColumn , ManyToOne} from 'typeorm';
import {Reply} from '../reply/reply.entity'
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column()
  end_date: number;

  @Column()
  itemImg: string;

  @Column()
  itemInfo: string;

  @Column()
  category: string;

  
}