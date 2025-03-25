import http from "../http-common";

const url = "https://taylor-swift-api.sarbo.workers.dev/albums";

class ProfessoresService {
  getProfessores() {
    return Promise.resolve(http.get(url));
  }

  getProfessorById(id) {
    return Promise.resolve(http.get(`${url}/${id}`));
  }

  postProfessor(data) {
    return Promise.resolve(http.post(`${url}`, data));
  }

  putProfessor(id, data) {
    return Promise.resolve(http.put(`${url}/${id}`, data));
  }

  deleteProfessorById(id) {
    return Promise.resolve(http.delete(`${url}/${id}`));
  }
}

export default new ProfessoresService();