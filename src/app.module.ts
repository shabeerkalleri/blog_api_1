import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module'; // Adjust as needed
import { BlogModule } from './blog/blog.module'; // Adjust as needed
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName:"cluster0" }), // Connect to MongoDB
    AuthModule, // Import AuthModule for authentication
    BlogModule, // Import BlogModule for blog related functionality
  ],
  controllers: [AppController], // Register main AppController
  providers: [AppService], // Register main AppService
})
export class AppModule {}
