import { Module } from '@nestjs/common';
import { ReconcilerController } from './reconciler.controller';
import { BalanceReconciler } from '@context/reconciliation/application/balance-reconciler';

@Module({
  imports: [],
  controllers: [ReconcilerController],
  providers: [
    {
      provide: 'RECONCILER',
      useValue: new BalanceReconciler(),
    },
  ],
})
export class ReconcilerModule {}
