const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
];

const escapeHtml = (text) => {
    return (
        text
            .replace(/&amp;|&#038;/g, "&")
            // eslint-disable-next-line quotes
            .replace(/&quot;|&#034;/g, '"')
            .replace(/&apos;|&#039;/g, "'")
            .replace(/&lt;|&#060;/g, "<")
            .replace(/&gt;|&#062;/g, ">")
            .replace(/&nbsp;|&#160;|&shy;|&#173;/g, " ")
            .replace(/&rsquo;|&#8217;/g, "’")
            .replace(/&lsquo;|&#8216;/g, "‘")
    );
};

export const convertApiData = (data) => {
    return data.map((el) => {
        const correctVariant = Math.floor(
            Math.random() * el?.incorrect_answers.length
        );
        const tempVariants = insert(
            el?.incorrect_answers,
            correctVariant,
            el.correct_answer
        ).map((el) => el.replace(/[^a-zA-Z0-9 ]/g, ""));

        return {
            title: escapeHtml(el?.question),
            variants: tempVariants,
            correctVariant: correctVariant,
            category: el?.category,
            difficulty: el?.difficulty,
            type: el?.type,
        };
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
