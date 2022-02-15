import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PostMiddlewareFunction } from 'mongoose';
import { Power } from './power.schema';

export type HeroDocument = Hero & Document;

@Schema()
export class Hero {
  @Prop({ required: true })
  name: string;

  @Prop()
  powers: Power[];
}
export const HeroSchema = SchemaFactory.createForClass(Hero);
