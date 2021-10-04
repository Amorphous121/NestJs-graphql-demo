import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dtos/createEmployee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  
  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee> 
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async create(employee: CreateEmployeeDto): Promise<Employee> {

    let emp = this.employeeRepository.create(employee);
    return this.employeeRepository.save(emp);

  }
}
