import { Controller, Get } from "@nestjs/common";
import { AppService } from "../services/app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("greeting")
  getHello(): object {
    return this.appService.getHello();
  }
}
