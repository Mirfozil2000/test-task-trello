import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CardService } from "./card.service";
import { UpdateCardDto } from "src/dto/update-card.dto";
import { CreateCardDto } from "src/dto/create-card.dto";

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cardService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cardService.remove(id);
  }
}