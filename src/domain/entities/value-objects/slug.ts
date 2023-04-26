export class Slug {
    public value: string
    constructor(value: string) {
        this.value = value
    }
    /**
     * Receives a string and normalize it as a slug
     * Example: "An example title" => "as-example-title"
     * @param text {string}
     */
    static createFromText(text: string) {
        const slugText = text
            .normalize("NFKD")
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-') //tira os espaços em branco
            .replace(/[^\w-]+/g, '-') // [\w] tudo que sao palavras - [^\w] tudo que nao sao palavras
            .replace(/_/g, '-') // substitui o underline por hifen
            .replace(/--+/g, '-') // substitui 2 hifens por 1 hifen
            .replace(/-$/g, '') // se o ultimo caracter da string for hifen será removido

        return new Slug(slugText);
    }
}