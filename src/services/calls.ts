const URL: string = `https://heroku-test-ecb.herokuapp.com/`;
export interface Service {
  name: string;
  email: string;
  plates: string;
  selectedDate: string;
  partialIdentity: string;
}
export const getInitialCars = async () => {
  const carros = await fetch(`${URL}`, {
    method: "GET",
  });

  const data = await carros.json();
  return data;
};

export const serviceRegister = async (service: object) => {
  const createService = await fetch(`${URL}service`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(service),
  });
  return createService;
};
