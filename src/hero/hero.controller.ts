import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { identity } from 'rxjs';
import { Hero, HeroDocument } from 'src/schemas/hero.schema';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get('')
  async findAllHeroes() {
    return await this.heroService.getAllHeroes();
  }

  @Get(':id')
  async getHero(@Param('id') id: string) {
    return await this.heroService.getHero(id);
  }

  @Post('')
  async addHero(@Body() heroToAdd: HeroDocument) {
    return await this.heroService.createHero(heroToAdd);
  }

  @Put(':id')
  async updateHero(
    @Param('id') id: string,
    @Body() heroToUpdate: HeroDocument,
  ) {
    return await this.heroService.updateHero(id, heroToUpdate);
  }

  @Delete(':id')
  async deleteHero(@Param('id') id: string) {
    return await this.heroService.deleteHero(id);
  }
}
