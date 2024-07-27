import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async create(@Body() dto: RegisterDto) {
    return await this.authService.create(dto);
  }

  @Post('signin')
  @HttpCode(200)
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }
}
