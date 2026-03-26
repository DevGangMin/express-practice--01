import express from 'express';
import cors from 'cors';
import subscriptionRouter from './router/subscriptions.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// 라우터 연결
app.use('/api/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
  res.send('서버 메인 페이지입니다.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});