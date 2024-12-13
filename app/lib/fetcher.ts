/**
 * A strongly typed fetcher function that returns a Promise of type T.
 * @param {string} url The URL to fetch.
 * @param {RequestInit} [options] The options to pass to the fetch function.
 * @returns {Promise<T>} A Promise that resolves to type T.
 */
export async function fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'cache': 'force-cache',
            ...options.headers,
        },
        ...options,
    });

    if (!res.ok) {
        let errorMsg: string;
        switch (res.status) {
            case 404:
                errorMsg = 'The requested resource could not be found.';
                break;
            case 401:
            case 403:
                errorMsg = 'You do not have permission to access this resource.';
                break;
            case 429:
                errorMsg = 'You have exceeded the maximum number of requests. Please try again later.';
                break;
            case 500:
            default:
                errorMsg = 'There was an unexpected error. Please try again later.';
                break;
        }
        throw new Error(errorMsg);
    }

    return res.json() as T;
}
