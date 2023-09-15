export const dateFormatting = (date) => {
    const offset = 1000 * 60 * 60 * 9;
    const koreaNow = new Date(new Date(date).getTime() + offset);
    const formatedDate = koreaNow.toISOString().replace("T", " ").split(".")[0];
    return formatedDate;
};