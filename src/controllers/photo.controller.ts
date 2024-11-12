import { Request, Response } from 'express'
import Photo from '../db/model/Photo'

export async function getPhotos(req: Request, res: Response): Promise<void> {
  const photo = await Photo.findAll()

  res.json(photo)
}

export async function getPhoto(req: Request, res: Response): Promise<void> {
  const { id } = req.params
  console.log(id)
  const photo = await Photo.findByPk(id)

  res.json(photo)
}

export async function createPhoto(req: Request, res: Response): Promise<void> {
  const { title, description, precio, habitaciones, huespedes } = req.body
  console.log(req.file?.path)
  const newPhoto = {
    title,
    description,
    precio,
    habitaciones,
    huespedes,
    imagePath: req.file?.path,
  }

  const photo = Photo.create(newPhoto)

  res.json({
    message: 'Photo Saved Successfully',
    photo,
  })
}

export async function deletePhoto(req: Request, res: Response): Promise<void> {
  const { id } = req.params
  const photo = await Photo.destroy({
    where: {
      id,
    },
  })

  res.json({
    message: 'Photo deleted successfully',
    photo,
  })
}

export async function updatePhoto(req: Request, res: Response): Promise<void> {
  const { id } = req.params
  const { title, description } = req.body
  const updatedPhoto = await Photo.update(
    {
      title,
      description,
    },
    {
      where: {
        id,
      },
    }
  )

  res.json({
    message: 'Successfully updated',
    updatedPhoto,
  })
}
