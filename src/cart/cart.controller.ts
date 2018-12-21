import { Controller, Post } from "../../node_modules/@nestjs/common";

@Controller('cart')

export class CartController {

    @Post() 
    addItem() {
        return 'This is a fake service!';
    }
}