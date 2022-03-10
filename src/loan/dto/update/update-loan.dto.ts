import { Category } from '../category.dto';

export class UpdateLoanDto {
  totalInvestedAmountCents: number;

  category: Category;

  expiresAt: Date;
}
