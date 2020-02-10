import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./users.service";
import { User } from "./interfaces/user.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get()
  findAll(): string {
    return "This action lists all current users";
  }
}
