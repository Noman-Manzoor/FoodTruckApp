import api from "./index"

exports.getAll = async (filter) => api.post("/trucks", filter)
exports.getMyTruck = async () => api.get(`/trucks/me`)
exports.getAllReviews = async (id) => api.get(`/trucks/${ id }`)
exports.getTruckMenu = async () => api.get(`/trucks/menu`)
exports.addTruckMenu = async (data) => api.post(`/trucks/menu`, data)
exports.updateTruckMenu = async (id, data) => api.put(`/trucks/menu/${ id }`, data)
exports.deleteTruckMenu = async (id) => api.delete(`/trucks/menu/${ id }`)
exports.getTruckOrders = async () => api.get(`/trucks/orders`)
exports.getTruckOrdersRequests = async () => api.get(`/trucks/orders/requests`)
exports.updateTruckOrderRequests = async (id) => api.put(`/trucks/orders/requests/${ id }`)
