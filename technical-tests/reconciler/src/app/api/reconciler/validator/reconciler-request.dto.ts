import { ReconcilerRequest } from '@context/reconciliation/application/reconciler-request';
import { BalanceDto } from './balance.dto';
import { TransactionDto } from './transaction.dto';
import { IsArray, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ReconcilerRequestDto implements ReconcilerRequest {
  @IsObject()
  @ValidateNested()
  @Type(() => BalanceDto)
  startingBalance: BalanceDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransactionDto)
  transactions: TransactionDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BalanceDto)
  balances: BalanceDto[];
}
