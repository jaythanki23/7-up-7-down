import express from 'express';
import cors from 'cors';
import { router as games } from './gameRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/game', games);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



