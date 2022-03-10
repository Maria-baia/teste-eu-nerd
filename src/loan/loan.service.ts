import { Injectable, Logger } from '@nestjs/common';
import { CreateLoanDto } from './dto/requests/create-loan.dto';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoanService {
  logger: Logger;
  private loans: Loan[] = [];
  private id = 0;

  constructor() {
    this.logger = new Logger('LoanService');
  }
  create(createLoanData: CreateLoanDto) {
    this.logger.log(`Creating a new loan: ${JSON.stringify(createLoanData)}`);
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
    return this.loans;
  }

  findOne(id: number) {
    return this.loans.find((v) => v.id === id);
  }

  // TODO: implementar o update
  update(id: number, updateLoanDto: any) {
    const loan = this.findOne(id);
    this.loans = this.loans.map((v) => {
      if (v.id === id) {
        return {
          ...loan,
          ...updateLoanDto,
        };
      }
      return v;
    });
    return `This action updates a #${id} loan`;
  }
  // TODO : implementar o remove
  remove(id: number) {
    const loan = this.findOne(id);
    this.loans = this.loans.filter((v) => v.id !== id);
    return loan;
  }
}
