document.addEventListener('DOMContentLoaded', () => {
    function node(node) {
        const textNodes = [], nonSpace = /\S/;

        function getText(node) {
            if (node.nodeType === 3) {
                if (nonSpace.test(node.nodeValue)) {
                    textNodes.push(node);
                }
            } else {
                for (let i = 0, item = node.childNodes.length; i < item; ++i) {
                    getText(node.childNodes[i]);
                }
            }
        }

        getText(node);
        return textNodes;
    }

    const textNodes = node(document.querySelector('content'));
    const wordsInTextNodes = [];
    for (let i = 0; i < textNodes.length; i++) {
        const node = textNodes[i];
        const words = [];
        const re = /[a-zA-Zа-яА-Я]+/g;
        let match;
        while ((match = re.exec(node.nodeValue)) != null) {
            const word = match[0];
            const position = match.index;
            words.push({
                length: word.length,
                position: position
            });
        }
        wordsInTextNodes[i] = words;
    }

    function messUpWords() {
        for (let i = 0; i < textNodes.length; i++) {
            const node = textNodes[i];
            for (let j = 0; j < wordsInTextNodes[i].length; j++) {
                if (Math.random() > 1 / 10) {
                    continue;
                }
                const wordMeta = wordsInTextNodes[i][j];
                const word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
                const before = node.nodeValue.slice(0, wordMeta.position);
                const after = node.nodeValue.slice(wordMeta.position + wordMeta.length);
                node.nodeValue = before + messUpWord(word) + after;
            }
        }
    }

    function messUpWord(word) {
        if (word.length < 3) {
            return word;
        }
        return word[0] + messUpMessyPart(word.slice(1, -1)) + word[word.length - 1];
    }

    function messUpMessyPart(messyPart) {

        if (messyPart.length < 2) {
            return messyPart;
        }

        let a, b;
        while (!(a < b)) {

            a = getRandomInt(0, messyPart.length - 1);
            b = getRandomInt(0, messyPart.length - 1);
        }
        return messyPart.slice(0, a) + messyPart[b] + messyPart.slice(a + 1, b) + messyPart[a] + messyPart.slice(b + 1);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setInterval(messUpWords, 50);
});

