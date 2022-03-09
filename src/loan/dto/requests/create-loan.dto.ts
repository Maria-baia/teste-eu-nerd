import { Category } from '../category.dto';

export class CreateLoanDto {
  totalInvestedAmountCents: number;

  category: Category;

  expiresAt: Date;
}
