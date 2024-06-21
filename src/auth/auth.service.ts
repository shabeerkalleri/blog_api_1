import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string): Promise<any> {
    // Validate user with your user service or database
    return { email };
  }

  async login(user: any) {
    const payload = { email: user.email };
    return {
       message:"sucessfully login" ,
      access_token: this.jwtService.sign(payload)
     
    };
  }
}

