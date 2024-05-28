import { Transaction } from '@context/reconciliation/domain/transaction';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString, IsUUID } from 'class-validator';

export class TransactionDto implements Transaction {
  @IsUUID('4')
  id: string;

  @Transform(({ value }) => {
    return new Date(value);
  })
  @IsDate()
  date: string;

  @IsString()
  label: string;

  @IsNumber()
  amount: number;
}
