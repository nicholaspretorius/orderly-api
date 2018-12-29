import { Get, Controller, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { ItemsService} from './items.service';
import { Item } from './items.interface';
import { ValidationPipe } from './../common/validation.pipe';
import { CreateItemDTO } from './create-item.dto';
import { AdminGuard } from './../common/admin.guard';

@Controller('items')

export class ItemsController {

    constructor(private readonly itemsService: ItemsService){}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Post()
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async create(@Body() item: CreateItemDTO) {
        return this.itemsService.create(item);
    }
}