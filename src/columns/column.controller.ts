import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ColumnService } from "./column.service";
import { CreateColumnDto } from "src/dto/create-column.dto";
import { UpdateColumnDto } from "src/dto/update-column.dto";

@Controller('columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post()
  create(@Body() createColumnDto: CreateColumnDto) {
    return this.columnService.create(createColumnDto);
  }

  @Get()
  findAll() {
    return this.columnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.columnService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateColumnDto: UpdateColumnDto) {
    return this.columnService.update(id, updateColumnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.columnService.remove(id);
  }
}