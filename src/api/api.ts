const DEFAULT_GET_CONFIG = {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
};

export const get = <T>(
  URI: string,
  config: Partial<RequestInit> = {}
): Promise<T> => {
  return fetch(URI, { ...DEFAULT_GET_CONFIG, ...config }).then(
    async (response) => {
      if (response.ok) return response.json();

      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  );
};
