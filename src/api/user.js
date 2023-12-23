import api from "./index"

exports.getMyDetail = async () => api.get("/users/me")
exports.updateMyDetail = async (data) => api.put("/users/me", data)
exports.getMyOrders = async () => api.get("/users/orders")
exports.addOrder = async (data) => api.post("/users/orders", data)
exports.orderCheckout = async (data) => api.post("/users/checkout", data)
exports.getTruckFav = async () => api.get("/users/truck/fav")
exports.addTruckFav = async (data) => api.post("/users/truck/fav", data)
exports.removeTruckFav = async (id) => api.delete(`/users/truck/fav/${id}`)
