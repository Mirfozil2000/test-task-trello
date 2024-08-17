import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Card } from './entities/card.entity';
import { BoardColumn } from './entities/column.entity';
import { User } from './entities/user.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'trello_clone',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([User, BoardColumn, Card, Comment]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
