import { Router } from "express"
import { renderTask, createTask, renderTaskEdit, editTask, deleteTask, toogleTaskDone } from '../Controllers/task.controllers'

const router = Router()

router.get("/", renderTask)
router.post("/task/add", createTask)
router.get("/edit/:id", renderTaskEdit)
router.post("/edit/:id", editTask)
router.get("/delete/:id", deleteTask)
router.get("/toogleDone/:id", toogleTaskDone )
export default router