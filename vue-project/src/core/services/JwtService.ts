const accessToken = "access_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(accessToken);
};

/**
 * @description save token into localStorage
 * @param access_token
 */
export const saveToken = (access_token: string): void => {
  window.localStorage.setItem(accessToken, access_token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(accessToken);
};

export default { getToken, saveToken, destroyToken };
