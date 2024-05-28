import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app/api/app.module';
import { ReconcilerMother } from '@test/context/reconciliation/domain/reconcilier-mother';
import { ReconcilierResponse } from '@context/reconciliation/application/reconcilier-response';

describe('Reconciler Controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('reconciles a valid set of balances and transactions', () => {
    return request(app.getHttpServer())
      .post('/reconciliation')
      .send(ReconcilerMother.validRequest())
      .expect(200);
  });

  it('removes duplicated transactions', () => {
    return request(app.getHttpServer())
      .post('/reconciliation')
      .send(ReconcilerMother.duplicatedTransactions())
      .expect(200);
  });

  it('removes duplicated balances', () => {
    return request(app.getHttpServer())
      .post('/reconciliation')
      .send(ReconcilerMother.duplicatedBalances())
      .expect(200);
  });

  it('throws an error with a list of reasons, if the reconciliation fails', () => {
    return request(app.getHttpServer())
      .post('/reconciliation')
      .send(ReconcilerMother.invalidBalancesRequest())
      .expect(400)
      .then((response) => {
        const body: ReconcilierResponse = response.body;
        expect(body.errors).toHaveLength(1);
      });
  });
});
