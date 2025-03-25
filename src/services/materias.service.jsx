import http from "../http-common";

const url = "https://taylor-swift-api.sarbo.workers.dev/songs";

class MateriasService {
  getMaterias() {
    return Promise.resolve(http.get(url));
  }

  getMateriaById(id) {
    return Promise.resolve(http.get(`${url}/${id}`));
  }

  postMateria(data) {
    return Promise.resolve(http.post(`${url}`, data));
  }

  putMateria(id, data) {
    return Promise.resolve(http.put(`${url}/${id}`, data));
  }

  deleteMateriaById(id) {
    return Promise.resolve(http.delete(`${url}/${id}`));
  }
}

export default new MateriasService();