import express from 'express'

const router = express.Router()

router.post("/", createPost)
router.get("/", getAllPosts)
router.get("/:id", getPostById)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router;