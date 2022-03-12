import { Injectable, Logger } from '@nestjs/common';
import { CreateLoanDto } from './dto/requests/create-loan.dto';
import { Loan } from './entities/loan.entity';
import { UpdateLoanDto } from './dto/update/update-loan.dto';

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
    let loans = this.loans.sort(function (a, b) {
      const categoryA = a.category.toUpperCase();
      const categoryB = b.category.toUpperCase();
      if (categoryA < categoryB) {
        return -1;
      }
      if (categoryA > categoryB) {
        return 1;
      }
      return 0;
    });

    loans = loans.sort(function (a, b) {
      const expiresA = a.expiresAt;
      const expiresB = b.expiresAt;
      if (expiresA < expiresB) {
        return -1;
      }
      if (expiresA > expiresB) {
        return 1;
      }
      return 0;
    });

    return loans;
  }

  findOne(id: number) {
    return this.loans.find((v) => v.id === id);
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
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
    return `This action updated a #${id} loan`;
  }

  remove(id: number) {
    const loan = this.findOne(id);
    this.loans = this.loans.filter((v) => v.id !== id);
    return loan;
  }
}
