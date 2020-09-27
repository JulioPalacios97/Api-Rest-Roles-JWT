import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/products.routes';
import AuthRoutes from './routes/auth.routes';
import UserRoutes from './routes/user.routes';
import {createRoles} from './libs/initialSetup';

const app = express()
createRoles();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
    res.json("welcome")
})

app.use('/api/products',productsRoutes)
app.use('/api/auth', AuthRoutes)
app.use('/api/users', UserRoutes)

export default app;

