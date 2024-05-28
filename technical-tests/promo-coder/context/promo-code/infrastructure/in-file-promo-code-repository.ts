import { readFile, writeFile } from "fs/promises";

import type { PromoCodeRepository } from "../domain/promo-code-repository";
import { type PromoCodeData } from "../domain/promo-code";
import { PromoCodeNotFound } from "../domain/exception/promo-code-not-found";

export class InFilePromoCodeRepository implements PromoCodeRepository {
  private readonly FILE_PATH = `${__dirname}/../../../promo-codes/`;

  async save(promoCodeData: PromoCodeData): Promise<void> {
    const promoCodeName = promoCodeData.name;
    await writeFile(
      this.filePath(promoCodeName),
      JSON.stringify(promoCodeData)
    );
  }

  async findByName(promoCodeName: string): Promise<PromoCodeData> {
    const filePath = this.filePath(promoCodeName);
    try {
      const fileContent = await readFile(filePath, "utf8");
      return JSON.parse(fileContent);
    } catch (error) {
      throw new PromoCodeNotFound(`Promo code not found: ${promoCodeName}`);
    }
  }

  private filePath(name: string): string {
    return `${this.FILE_PATH}${name}.json`;
  }
}
