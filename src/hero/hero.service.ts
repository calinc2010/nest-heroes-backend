import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { async } from 'rxjs';
import { Hero, HeroDocument } from 'src/schemas/hero.schema';

@Injectable()
export class HeroService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  async createHero(heroToAdd: HeroDocument) {
    try {
      const newHero = new this.heroModel(heroToAdd);
      return await newHero.save();
    } catch (err) {
      return new BadRequestException(err);
    }
  }

  async getAllHeroes() {
    try {
      return this.heroModel.find().exec();
    } catch (err) {
      return new BadRequestException(err);
    }
  }

  async getHero(id: string) {
    try {
      const foundHero = await this.heroModel.findById(id).exec();
      if (foundHero) return;
      else {
        return new NotFoundException();
      }
    } catch (err) {
      return new BadRequestException(err);
    }
  }

  async updateHero(id: string, updatedHero: HeroDocument) {
    try {
      return await this.heroModel.findByIdAndUpdate(id, updatedHero).exec();
    } catch (err) {
      return new BadRequestException(err);
    }
  }

  async deleteHero(id: string) {
    try {
      const deletedHero = await this.heroModel.findByIdAndDelete(id).exec();
      if (deletedHero) return;
      else {
        return new NotFoundException();
      }
    } catch (err) {
      return new BadRequestException(err);
    }
  }
}
