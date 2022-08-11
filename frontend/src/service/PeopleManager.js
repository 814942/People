import axios from "axios";

const $URL = "https://62b0ed83e460b79df04f71c4.mockapi.io/people/people";

export class PeopleManager {
  async getPeople() {
    const { data } = await axios.get($URL);
    return data;
  }
  async getPerson(id) {
    const { data } = await axios.get(`${$URL}/${id}`);
    return data;
  }
  async addPerson(person) {
    const { status, statusText, data } = await axios.post($URL, { person });
    return { status, statusText, data };
  }
  async deletePerson(id) {
    const { status, statusText, data } = await axios.delete(`${$URL}/${id}`, { id });
    return { status, statusText, data };
  }
}