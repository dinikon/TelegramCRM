const access_token = "access_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(access_token);
};

/**
 * @description save token into localStorage
 * @param token
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(access_token, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(access_token);
};

export default { getToken, saveToken, destroyToken };
