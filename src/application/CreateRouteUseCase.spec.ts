import { CreateRouteUseCase } from './CreateRouteUseCase';
import { RouteInMemoryRepository } from './../infra/db/RouteInMemoryRepository';

describe('CreateRouteUseCase', () => {
    test('Should create a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const createRouteUseCase = new CreateRouteUseCase(repository);

        const route = await createRouteUseCase.execute({
            title: 'New Route',
            startPosition: { latitude: 10, longitude: 25},
            endPosition: { latitude: 45, longitude: 50}
        });

        expect(route).toStrictEqual({
            title: 'New Route',
            startPosition: { latitude: 10, longitude: 25},
            endPosition: { latitude: 45, longitude: 50},
            points: []           
        });

        expect(repository.items).toHaveLength(1);
    });
});