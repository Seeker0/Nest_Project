import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): object {
    return { greeting: "Hello World!" };
  }
}
