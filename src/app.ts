import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes'
import dotenv from 'dotenv';
dotenv.config();

class App {
  public express: express.Application
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
    const url: any = process.env.DATABASE_URL
    mongoose.connect(url)
      .then(() => console.log('✅ Connected to MongoDb'))
  }
  private routes (): void {
    this.express.use(router)
  }
}

export default new App().express