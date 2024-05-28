import { parse } from 'node-html-parser';

export class HyperlinkParser {
    constructor() {
        this.hyperlinks = [];
    }

    parse(html) {
        const root = parse(html);
        const anchorTags = root.querySelectorAll('a');
        anchorTags.forEach(tag => {
            const href = tag.getAttribute('href');
            if (href) {
                this.hyperlinks.push(href);
            }
        });
    }
}
