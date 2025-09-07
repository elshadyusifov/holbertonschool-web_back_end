import express from 'express';
import router from './routes/index';

const app = express();

app.use(router);

const PORT = 1245;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
