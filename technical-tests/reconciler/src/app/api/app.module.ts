import { Module } from '@nestjs/common';
import { ReconcilerModule } from './reconciler/reconciler.module';

@Module({
  imports: [ReconcilerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
