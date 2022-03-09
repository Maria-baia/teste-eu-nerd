import { Category } from '../dto/category.dto';

export class Loan {
  id: number;
  totalRequestAmountCents: number;
  category: Category;
  expiresAt: Date;
}
