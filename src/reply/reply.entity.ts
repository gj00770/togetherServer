import { join } from 'path';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Product } from '../product/product.entity'
@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  summary: string;

  
  @ManyToOne(()=>Product, (product) => product.id)
   @JoinColumn({name:"product_id",referencedColumnName:"id"})
 // @JoinTable()
  productId:Product[];
}