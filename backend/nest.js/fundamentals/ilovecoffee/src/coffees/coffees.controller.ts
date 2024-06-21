import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body: { name: string }) {
    return body.name;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { name: string }) {
    return `This action updates coffee #${id} with ${body.name}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes coffee #${id}`;
  }
}
