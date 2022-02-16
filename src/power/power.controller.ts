import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HeroService } from 'src/hero/hero.service';
import { Hero } from 'src/schemas/hero.schema';
import { Power, PowerDocument } from 'src/schemas/power.schema';
import { PowerService } from './power.service';

@Controller('powers')
export class PowerController {
  constructor(private readonly powerService: PowerService) {}

  @Put(':id')
  async updatePowerByHeroId(
    @Body() updatedPower: PowerDocument,
    @Param('id') id: string,
  ) {
    return await this.powerService.updatePowerByHeroId(id, updatedPower);
  }

  @Delete(':id')
  async deletePowerByHeroId(
    @Body() power: PowerDocument,
    @Param('id') id: string,
  ) {
    return await this.powerService.deletePowerByHeroId(id, power);
  }

  @Post(':id')
  async addPower(@Param('id') id: string, @Body() newPower: PowerDocument) {
    return await this.powerService.addPowerToHeroId(id, newPower);
  }

  @Get(':id')
  async getHeroPowers(@Param('id') id: string) {
    return await this.powerService.getPowersByHeroId(id);
  }
}
