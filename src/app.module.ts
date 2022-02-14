import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroService } from './hero/hero.service';
import { Hero, HeroSchema } from './schemas/hero.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://calinc2010:NEhWAdkSskN83Jzj@heroes.ybtb8.mongodb.net/Heroes?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule {}
