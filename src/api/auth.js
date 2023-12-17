import api from "./index"

exports.login = async (email, password) => api.post("/auth/login", {
  email, password
})

exports.loginSocial = async (data) => api.post("/auth/login/social", data)

exports.registration = async (data) => api.post("/auth/registration", data)

exports.forgetPassword = async (data) => api.post("/auth/forget-password", data)

exports.forgetPasswordReset = async (data) => api.post("/auth/forget-password/rest", data)