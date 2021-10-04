import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmployeeDto } from './dtos/createEmployee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {

  constructor(private employeeService: EmployeeService) {}

  @Query(() => Employee, { name: "getAllEmployees"})
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee'})
  create(@Args('employee') employee: CreateEmployeeDto ) {
    return this.employeeService.create(employee);
  }

}
