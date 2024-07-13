export const formatDate = (timestamp: number | string) => {
    const timestampParsed = Date.parse(String(timestamp));
    return new Date(timestampParsed).toLocaleDateString();
};
