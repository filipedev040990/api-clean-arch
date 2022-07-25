import { ListRoutesUseCase } from './../../application/ListRoutesUseCase';
import { RouteInMemoryRepository } from '../../infra/db/RouteInMemoryRepository';
import { CreateRouteUseCase } from './../../application/CreateRouteUseCase';
import Router, { Request, Response } from 'express';
import { isRegularExpressionLiteral } from 'typescript';

const router = Router();

const routeRepository = new RouteInMemoryRepository();


router.post('/routes', async (req: Request, res: Response) => {

    const createRouteUseCase = new CreateRouteUseCase(routeRepository);
    const route = await createRouteUseCase.execute(req.body);
    res.status(201).json(route);
});

router.get('/routes', async (req: Request, res: Response) => {
    const listRoutes = new ListRoutesUseCase(routeRepository);
    const routes = await listRoutes.execute();
    res.status(200).json(routes);
});

export { router }