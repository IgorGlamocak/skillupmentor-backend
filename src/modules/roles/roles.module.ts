import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Role } from '../../entities/role.entity'
import { RolesController } from './roles.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService],
})
export class RolesModule {}
