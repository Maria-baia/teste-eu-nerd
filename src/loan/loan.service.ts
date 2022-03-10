import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/requests/create-loan.dto';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoanService {
  private loans: Loan[] = [];
  private id = 0;

  create(createLoanData: CreateLoanDto) {
    // Criar uma entrada no DB
    const loan: Loan = {
      id: this.id,
      category: createLoanData.category,
      expiresAt: createLoanData.expiresAt,
      totalRequestAmountCents: createLoanData.totalInvestedAmountCents,
    };
    this.id++;
    this.loans.push(loan);
    return createLoanData;
  }

  findAll() {
    // TODO: ordenar os loans por categoria e por data de expiração
    // TODO: adicionar a lista ao fake DB
    m;
    a;
    r;
    i;
    a;
    r;
    return this.loans;
  }

  findOne(id: number) {
    return this.loans.find((v) => v.id === id);
  }

  // TODO: implementar o update
  update(id: number, updateLoanDto: any) {
    return `This action updates a #${id} loan`;
  }
  // TODO : implementar o remove
  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
