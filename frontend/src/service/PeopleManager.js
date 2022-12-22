import axios from "axios";

const $URL = "https://62b0ed83e460b79df04f71c4.mockapi.io/people/people";

export class PeopleManager {
  async getPeople() {
    try {
      const { status, statusText, data } = await axios.get($URL);
      return { status, statusText, data };
    } catch (error) {
      console.error(error);
      return { status: 500, statusText: error.message, data: [] }
    }
  }
  async getPersonById(id) {
    try {
      const { status, statusText, data } = await axios.get(`${$URL}/${id}`);
      return { status, statusText, data };
    } catch (error) {
      console.error(error);
      return { status: 500, statusText: error.message, data: [] }
    }
  }
  async getPersonByName(name) {
    try {
      const { status, statusText, data } = await axios.get(`${$URL}?search=${name}`);
      return { status, statusText, data };;
    } catch (error) {
      console.error(error);
      return { status: 500, statusText: error.message, data: [] }
    }
  }
  async addPerson(person) {
    try {
      const { status, statusText, data } = await axios.post($URL, { person });
      return { status, statusText, data };
    } catch (error) {
      console.error(error);
      return { status: 500, statusText: error.message, data: [] }
    }
  }
  async deletePerson(id) {
    try {
      const { status, statusText, data } = await axios.delete(`${$URL}/${id}`, { id });
      return { status, statusText, data };
    } catch (error) {
      console.error(error);
      return { status: 500, statusText: error.message, data: [] }
    }
  }
}