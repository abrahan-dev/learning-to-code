import { HyperlinkParser } from "./hyperlinkparser";

import fetch from 'node-fetch';

async function getHyperlinks(url) {
    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');

        if (!contentType || !contentType.startsWith('text/html')) {
            return [];
        }

        const html = await response.text();
        const parser = new HyperlinkParser();
        parser.parse(html);
        return parser.hyperlinks;
    } catch (error) {
        console.error(error);
        return [];
    }
}
