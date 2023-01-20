const convertHTMLCodes = (str) => {
    if (/&#\d+;/.test(str)) {
        return str.replace(/&#(\d+);/g, (match, code) =>
            String.fromCharCode(code)
        );
    }
    const replacements = {
        "&#x([0-9A-Fa-f]+);": (match, code) =>
            String.fromCharCode(parseInt(code, 16)),
        "&quot;": '"',
        "&ldquo;": "“",
        "&rdquo;": "”",
        "&rsquo;": "’",
        "&hellip;": "…",
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&apos;": "'",
        "&shy;": "-",
    };
    const pattern = new RegExp(Object.keys(replacements).join("|"), "g");
    return str.replace(pattern, (match) => replacements[match]);
};

export const convertApiData = (data) => {
    return data.map((el) => {
        const correctVariant = Math.floor(
            Math.random() * el?.incorrect_answers.length
        );

        el?.incorrect_answers.splice(correctVariant, 0, el.correct_answer);
        const tempVariants = el?.incorrect_answers.map((variant) =>
            convertHTMLCodes(variant)
        );
        console.log(el?.question);
        console.log(convertHTMLCodes(el?.question));
        return {
            title: convertHTMLCodes(el?.question),
            variants: tempVariants,
            correctVariant: correctVariant,
            category: el?.category,
            difficulty: el?.difficulty,
            type: el?.type,
        };
    });
};

export const converApiCategories = (data) => {
    const tempCategories = [];
    for (const el of data) {
        const group = el.name.substring(0, el.name.indexOf(":"));
        const title = el.name.substring(el.name.indexOf(":") + 1);
        tempCategories.push({
            id: el.id,
            title: title ? title.trim() : el.name,
            group: group ? group : "General",
        });
    }
    tempCategories.sort((a, b) => (a.group > b.group ? -1 : 1));
    return tempCategories;
};

export const getDuration = (date1, date2) => {
    return Math.abs(date1 - date2);
};

export const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return [
        hours ? hours.toString().padStart(2, "0") : null,
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ]
        .filter((el) => el !== null)
        .join(":");
};

export const formatDate = (strDate) => {
    const date = new Date(strDate);
    return date.toLocaleString("ru", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
};
