import User from "../db/models/user.entity";
import { UserService } from "../services/user.service";
import { UseGuards, HttpException, HttpStatus, UnauthorizedException } from "@nestjs/common";
import { GqlAuthGuard } from "../middlewares/glqauthguard";
import { Query as TQuery, Int } from 'type-graphql';
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { User as CurrentUser } from '../decorators/user.decorators';

@Resolver(of => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

/*     @TQuery()
    @Query()
    @UseGuards(GqlAuthGuard)
    hello(): String {
        return "hello hello"
    } */

    @UseGuards(GqlAuthGuard)
    @Query(returns => User, { name: 'user', nullable: true })
    async getUser(@CurrentUser() user: User, @Args({ name: 'id', type: () => Int }) id: number): Promise<User> {
        if (user.id != id)
            throw new UnauthorizedException();
        return await this.userService.getUserById(id)
    }

    @Mutation(returns => String, { name: 'register', nullable: true })
    async register(@Args('username') username: string,
                  @Args('email') email: string, 
                  @Args('password') password: string): Promise<String> {
        var user = await this.userService.register(username, email, password);
        if (user != null) {
            return this.userService.createToken({ id: user.id });
        }
        throw new HttpException(
            'error registering user',
            HttpStatus.INTERNAL_SERVER_ERROR,
        );

    }

    @TQuery(returns => String, { name: 'login', nullable: true })
    @Query(returns => String, { name: 'login', nullable: true })
    async login(@Args('username') username: string, 
                @Args('email') email: string, 
                @Args('password') password: string): Promise<String> {
        var user = await this.userService.login(username, email, password);
        if (user != null) {
            return this.userService.createToken({ id: user.id });
        }
        throw new HttpException(
            'error logging user in',
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}