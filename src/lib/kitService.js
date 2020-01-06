const baseUrl = "http://localhost:8080/kits";

export const loadKits = () => {
  return fetch(baseUrl).then(res => res.json());
};
