export const renderShortText = (str: string) => {
    const lines = str.replace('{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"', ' ');
    const shortText = lines.split(' ').slice(0, 36).join(' ');
    console.log(shortText);
    return shortText
}

export const userState = (user: boolean) => user;
