import { Request, Response } from 'express'
import IUserService from '../service/IUserService'
// import User from '../schemas/UserSchema'

export class UserRoute {
  public userService: IUserService

  constructor (userService: IUserService) {
    this.userService = userService;
  }

  public getUsers = async (req: Request, res: Result): Promise<Response> => {
    // const users = await User.find()
    const users = await this.userService.getUsers()

    return res.json(users)
  }

  public createUser = async (req: Request, res: Result): Promise<Response> => {
    // const user = await User.create(req.body)
    const user = await this.userService.createUser(req.body)

    return res.json(user)
  }

  public updateUser = async (req: Request, res: Result): Promise<Response> => {
    // const user = await User.update({_id: req.params.id}, req.body)
    const user = await this.userService.updateUser(req.params.id, req.body)

    return res.json(user)
  }

  public deleteUser = async (req: Request, res: Result): Promise<Response> => {
    // const user = await User.deleteOne({_id: req.params.id})
    const user = await this.userService.deleteUser(req.params.id)

    return res.json(user)
  }
}
// 'use strict'
// const dbConnection = require('../db-configs-mongoose')
// const mongoose = require('mongoose')
// const userSchema = require('../models/user-mongo-db')
// const router = require('express').Router()
//
// const User = mongoose.model('User', userSchema)
//
// router.get('/:id', async(req, res) => {
//   await dbConnection()
//
//   const id = req.params.id
//   const user = await User.findById(id)
//
//   if (user)
//     res.status(200).json(user)
//   else
//     res.status(400).json('User not found')
// })
//
// router.post('/', async(req, res) => {
//   await dbConnection()
//
//   const name = req.body.name
//   const cpf = req.body.cpf
//
//   try {
//     const user = new User({
//       name: name,
//       cpf: cpf,
//     })
//     await user.save()
//     res.status(200).json(user)
//
//   } catch (err) {
//     console.log(err)
//     res.status(400).json(err)
//   }
// })
//
// module.exports = router
