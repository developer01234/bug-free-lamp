import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./models/users.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepos: typeof User) {}

  async createUser(dto: CreateUserDto) {
    // created user
    const user = await this.userRepos.create(dto);
    return user;
  }
  async getUsers() {
    // Find all users
    const users = await this.userRepos.findAll();
    return users;
  }
}
