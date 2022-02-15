import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PowerDocument = Power & Document;

@Schema()
export class Power {
  @Prop()
  name: string;
  @Prop()
  level: number;
}

export const PowerSchema = SchemaFactory.createForClass(Power);
