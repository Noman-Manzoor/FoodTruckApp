import api from "./index"

exports.getAll = async (filter) => {
  let query = ""
  if (filter) {
    query = `?${Object.keys(filter).map((item) => {
      return `${item}=${filter[item]}`
    }).join("&")}`
  }
  return api.get(`/trucks${query}`);
}
exports.getCategory = async () => api.get(`/trucks/category`)
exports.getTruckById = async (id) => api.get(`/trucks/${id}`)
exports.getMyTruck = async () => api.get(`/trucks/me`)
exports.getAllReviews = async (id) => api.get(`/trucks/${id}`)
exports.updateTruck = async (data) => api.put(`/trucks/me`, data)
exports.getTruckMenu = async () => api.get(`/trucks/menu`)
exports.addTruckMenu = async (data) => api.post(`/trucks/menu`, data)
exports.updateTruckMenu = async (id, data) => api.put(`/trucks/menu/${id}`, data)
exports.deleteTruckMenu = async (id) => api.delete(`/trucks/menu/${id}`)
exports.getTruckOrders = async () => api.get(`/trucks/orders`)
exports.getTruckOrdersRequests = async () => api.get(`/trucks/orders/requests`)
exports.updateTruckOrderRequests = async (id, data) => api.post(`/trucks/orders/request/${id}`, data)
