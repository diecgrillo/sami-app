import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  private express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    const mongoURI = process.env.MONGODB_URI
    // const database = await mongoose.connect(mongoURI, {
    //   useNewUrlParser: true, useUnifiedTopology: true
    // })
    mongoose.connect(mongoURI, {
      useNewUrlParser: true, useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
