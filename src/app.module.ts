import { Module } from '@nestjs/common';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [LoanModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
