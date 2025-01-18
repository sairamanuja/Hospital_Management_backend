import express from 'express';
const adminRouter = express.Router();
import { hospitalMiddleware } from '../Middleware/hospitalMiddleware.js';
import { adminMiddleware } from '../Middleware/adminMiddleware.js';
import { AddDoctor, AllDoctor, createAppointmentByDoctor, login, signup,getAllAppointments } from '../Controllers/admin_controler.js';
adminRouter.post('/login', login);
adminRouter.post('/signup', signup);
adminRouter.post("/addDoctor",hospitalMiddleware,adminMiddleware,AddDoctor)
adminRouter.post("/allDoctor",hospitalMiddleware,adminMiddleware,AllDoctor)
adminRouter.post("/addAppointment",hospitalMiddleware,adminMiddleware,createAppointmentByDoctor)
adminRouter.get("/allAppointment",hospitalMiddleware,adminMiddleware,getAllAppointments)

export default adminRouter; 