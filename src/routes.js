import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Caio Henrique',
    email: 'Henquire@gmail.com.br',
    password_hash: '123412312356',
  });

  return res.json(user);
});

export default routes;
