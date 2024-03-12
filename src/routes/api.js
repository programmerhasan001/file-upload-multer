const {Router} = require("express")
const { getStudents, createStudents, updateStudents, deleteStudents, uploadPhoto } = require("../controllers/studentController")
const AuthMiddlwWare = require("../middleware/AuthMiddleware")
const upload = require("../utils/uploadFile")

const router = Router()



router.get("/get-students", getStudents)
router.post("/create-students", AuthMiddlwWare, createStudents)
router.put("/update-students", updateStudents)
router.delete("/delete-students", deleteStudents)
router.post("/upload-photo", upload.single("file"), uploadPhoto)

module.exports = router;