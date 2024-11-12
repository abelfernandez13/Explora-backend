import { Router } from 'express'
import multer from '../libs/multer'

const router = Router()
import {
  createPhoto,
  getPhotos,
  getPhoto,
  deletePhoto,
  updatePhoto,
} from '../controllers/photo.controller'

router.post('/photos', multer.single('image'), createPhoto)
router.get('/photos', getPhotos)

router.get('/photos/:id', getPhoto)
router.delete('/photos/:id', deletePhoto)
router.put('/photos/:id', updatePhoto)

export default router
