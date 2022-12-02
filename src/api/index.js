const baseURL = "https://dev-api.inop.ai/api/v1/dev/companies";

/**
 * Fetch companies
 *
 * @returns json object
 */
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

/**
 * Update a company
 *
 * @param {string} id the company's id.
 * @param {json} data the payload.
 */
export const updateCompany = (id, data) => {
  console.debug("updateCompany");
  return fetch(`${baseURL}/${id}`, {
    method: 'PATCH',
    body: data,
    headers: {
      "Accept": "application/json"
    }
  });
};