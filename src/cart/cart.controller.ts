import { Controller, Post } from '@nestjs/common';

@Controller('cart')

export class CartController {

    @Post()
    addItem() {
        return 'This is a fake service!';
    }
}