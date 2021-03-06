import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    response.send()
    return response.json()
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;