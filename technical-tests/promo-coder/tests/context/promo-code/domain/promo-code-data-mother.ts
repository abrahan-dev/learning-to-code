import type { PromoCodeData } from "../../../../context/promo-code/domain/promo-code";

export class PromoCodeDataMother {
  static create(name: string): PromoCodeData {
    return {
      name,
      advantage: { percent: 20 },
      restrictions: [
        {
          date: {
            after: "2019-01-01",
            before: "2024-06-30",
          },
        },
        {
          or: [
            {
              age: {
                eq: 40,
                lt: null,
                gt: null,
              },
            },
            {
              and: [
                {
                  age: {
                    eq: null,
                    lt: 30,
                    gt: 15,
                  },
                },
                {
                  weather: {
                    is: "clear",
                    temp: {
                      eq: null,
                      lt: null,
                      gt: 15,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
