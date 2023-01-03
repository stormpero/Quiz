const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
];

const escapeHtml = (text) => {
    return text
        .replace(/&amp;|&#038;/g, "&")
        .replace(/&quot;|&#034;/g, '"')
        .replace(/&apos;|&#039;/g, "'")
        .replace(/&lt;|&#060;/g, "<")
        .replace(/&gt;|&#062;/g, ">")
        .replace(/&nbsp;|&#160;/g, " ")
        .replace(/&rsquo;|&#8217;/g, "’")
        .replace(/&lsquo;|&#8216;/g, "‘");
};

export const convertApiData = (data) => {
    return data.map((el) => {
        const newElement = el;
        const index = Math.floor(
            Math.random() * newElement?.incorrect_answers.length
        );
        newElement.question = escapeHtml(newElement?.question);

        newElement.incorrect_answers = insert(
            el?.incorrect_answers,
            index,
            el.correct_answer
        ).map((el) => el.replace(/[^a-zA-Z0-9 ]/g, ""));
        newElement.correct = index;
        return el;
    });
};

export const converApiCategories = (data) => {
    const tempCategories = data.map((el) => {
        return {
            id: el.id,
            title:
                el.name.indexOf(":") + 1
                    ? el.name.split(":")[1].trim()
                    : el.name,
            group: el.name.indexOf(":") + 1 ? el.name.split(":")[0] : "General",
        };
    });
    return tempCategories.sort((a, b) => -a.group.localeCompare(b.group));
};
