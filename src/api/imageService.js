// api/service.js

import axios from "axios";

export default class ImageService {
  constructor() {
    let service = axios.create({
      baseURL: "https://api.unsplash.com/"
    });
    this.service = service;
    this.client_id =
      "d620648dfd3826cea9b66f225563f19958ec717ab23c21fd446f05bb3279065f";
  }

  errorHandler = err => {
    // console.error(err);
    throw err;
  };

  search(query) {
    return this.service
      .get("/search/photos", { params: { client_id: this.client_id, query } })
      .then(res => res.data)
      .catch(this.errorHandler);
  }

  detail(id) {
    return this.service
      .get("/photos/" + id, { params: { client_id: this.client_id } })
      .then(res => res.data)
      .catch(this.errorHandler);
  }
}
