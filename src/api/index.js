const baseURL = "https://dev-api.inop.ai/api/v1/dev/companies";

export const getCompanies = async () => {
    try {
        const res = await fetch(baseURL);
        const json = await res.json();
        console.debug("getCompanies");
        return json;
    } catch (error) {
        console.error(error);
    }
};
