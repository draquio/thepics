import { ENV } from "../utils/constants";
export class Photo {
  async GetList(
    order: string = "latest",
    per_page: number = 30,
    page: number = 1
  ) {
    try {
      const url = `${ENV.Api_URL}${ENV.Api_route.list_photos}?per_page=${per_page}&order_by=${order}&page=${page}`;
      
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Client-ID ${ENV.Api_key}`,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        return result;
      }
      throw response;
    } catch (error) {
      return error;
    }
  }
  async SearchPhotos(query: string, per_page:number = 30) {
    try {
      const url = `${ENV.Api_URL}${ENV.Api_route.search}?query=${query}&per_page=${per_page}`;
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Client-ID ${ENV.Api_key}`,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        return result.results;
      }
      throw response;
    } catch (error) {
      return error;
    }
  }

  async GetPhoto(id: string) {
    try {
      const url = `${ENV.Api_URL}${ENV.Api_route.photo}/${id}`;
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Client-ID ${ENV.Api_key}`,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        return result;
      }
      throw response;
    } catch (error) {
      return error;
    }
  }

  async GetRelated(id: string, type:string = "photos") {
    try {
      const url = `${ENV.Api_URL}${ENV.Api_route.related}/${id}/${type}`;
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Client-ID ${ENV.Api_key}`,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        return result.results;
      }
      throw response;
    } catch (error) {
      return error;
    }
  }
}
