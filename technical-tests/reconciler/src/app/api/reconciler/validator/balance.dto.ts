import { Balance } from '@context/reconciliation/domain/balance';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class BalanceDto implements Balance {
  @Transform(({ value }) => {
    return new Date(value);
  })
  @IsDate()
  date: string;

  @IsNumber()
  amount: number;
}
