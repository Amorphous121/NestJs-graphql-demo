import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Module({
  providers: [EmployeeService, EmployeeResolver], 
  imports: [TypeOrmModule.forFeature([Employee])]
})
export class EmployeeModule {}
