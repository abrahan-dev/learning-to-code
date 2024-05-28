import { PromoCodeChecker } from "./context/promo-code/application/promo-code-checker";
import { PromoCodeCreator } from "./context/promo-code/application/promo-code-creator";
import { PromoCodeNotFound } from "./context/promo-code/domain/exception/promo-code-not-found";
import type {
  PromoCodeData,
  PromoCodeValidation,
} from "./context/promo-code/domain/promo-code";
import { InFilePromoCodeRepository } from "./context/promo-code/infrastructure/in-file-promo-code-repository";
import { OpenWeatherMapWeatherService } from "./context/promo-code/infrastructure/open-weather-weather-service";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const method = req.method;

    if (method === "GET" && url.pathname === "/") {
      return new Response("Promo code api!");
    }

    if (method === "POST" && url.pathname === "/promo-codes/") {
      const requestBody = (await req.json()) as PromoCodeData | undefined;

      if (!requestBody) {
        return new Response("Invalid request body", { status: 400 });
      }

      try {
        const promoCodeRepository = new InFilePromoCodeRepository();
        const promoCodeCreator = new PromoCodeCreator(promoCodeRepository);
        await promoCodeCreator.run(requestBody);

        return new Response("", { status: 201 });
      } catch (error) {
        console.error(error);
        return new Response("Fatal error", { status: 500 });
      }
    }

    if (method === "POST" && url.pathname === "/promo-codes/checker/") {
      const promoCodeValidation = (await req.json()) as
        | PromoCodeValidation
        | undefined;

      if (!promoCodeValidation) {
        return new Response("Invalid request body", { status: 400 });
      }

      try {
        const promoCodeRepository = new InFilePromoCodeRepository();
        const promoCodeChecker = new PromoCodeChecker(
          promoCodeRepository,
          new OpenWeatherMapWeatherService()
        );
        const result = await promoCodeChecker.run(promoCodeValidation);

        let content: {
          promocode_name: string;
          status: string;
          advantage?: { percent: number };
          reasons?: any[];
        } = {
          promocode_name: "WeatherCode",
          status: result.isValid ? "accepted" : "denied",
        };

        if (!result.isValid) {
          content = {
            ...content,
            reasons: result.reasons,
          };
        }

        if (result.isValid) {
          content = {
            ...content,
            advantage: result.advantage,
          };
        }

        return new Response(JSON.stringify(content), { status: 200 });
      } catch (error) {
        if (error instanceof PromoCodeNotFound) {
          return new Response(error.message, { status: 404 });
        }

        console.error(error);
        return new Response("Fatal error", { status: 500 });
      }
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
