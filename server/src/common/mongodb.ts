import { connect } from 'mongoose';
const connectionUrl = 'mongodb://localhost:27017/user_db';

export const connectMongo = async () => {
  try {
    await connect(connectionUrl, { useNewUrlParser: true });
  } catch (error) {
    console.error(error);
  }
}
