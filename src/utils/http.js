export default {
    async getRequest(location) {
      const fetchResponse = await fetch(location);
      return await fetchResponse.json();
    }
  };