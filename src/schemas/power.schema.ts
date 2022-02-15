import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PowerDocument = Power & Document;

@Schema()
export class Power {
  @Prop({ require: true })
  name: string;
  @Prop({ require: true })
  level: number;
}

export const PowerSchema = SchemaFactory.createForClass(Power);
