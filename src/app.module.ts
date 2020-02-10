import { Module } from "@nestjs/common";
import {
  AppController,
  UsersController
} from "../controllers/index.controller";
// import { UsersController } from "../controllers/users.controller";
import { AppService } from "../services/app.service";

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService]
})
export class AppModule {}
