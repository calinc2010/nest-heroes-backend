import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';
import { Hero, HeroDocument } from 'src/schemas/hero.schema';
import { Power, PowerDocument } from 'src/schemas/power.schema';

@Injectable()
export class PowerService {
  constructor(
    @InjectModel(Power.name) private powerModel: Model<PowerDocument>,
    @InjectModel(Hero.name) private heroModel: Model<HeroDocument>,
  ) {}

  async updatePowerByHeroId(id: string, newPower: PowerDocument) {
    try {
      const hero = await this.heroModel.findById(id);
      const found = hero.powers.findIndex(
        (power) => power.name === newPower.name,
      );
      hero.powers[found] = newPower;
      return await this.heroModel.findByIdAndUpdate(id, hero);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async addPowerToHeroId(id: string, newPower: PowerDocument) {
    try {
      const hero = await this.heroModel.findById(id);
      hero.powers.push(newPower);
      return await this.heroModel.findByIdAndUpdate(id, hero);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async deletePowerByHeroId(id: string, heroPower: PowerDocument) {
    try {
      const hero = await this.heroModel.findById(id);
      hero.powers = hero.powers.filter((power) => power.name != heroPower.name);
      return await this.heroModel.findByIdAndUpdate(id, hero);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async getPowersByHeroId(id: string) {
    try {
      const hero = await this.heroModel.findById(id);
      return hero.powers;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
