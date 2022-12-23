/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  quantity: string;
  @Prop()
  price: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
