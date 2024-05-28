import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Inject,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { ReconcilerRequestDto } from './validator/reconciler-request.dto';
import { InvalidBalancesError } from '@context/reconciliation/domain/errors/invalidBalancesError';
import { Reconciler } from '@context/reconciliation/domain/reconciler';

@Controller('reconciliation')
export class ReconcilerController {
  constructor(@Inject('RECONCILER') private readonly reconciler: Reconciler) {}

  @Post()
  @HttpCode(200)
  reconcile(@Body() reconcilerRequest: ReconcilerRequestDto): void {
    try {
      this.reconciler.run(reconcilerRequest);
    } catch (error: unknown) {
      if (error instanceof InvalidBalancesError) {
        throw new BadRequestException({ errors: error.reasons });
      }

      throw new InternalServerErrorException(
        'An error occurred while reconciling the data',
      );
    }
  }
}
