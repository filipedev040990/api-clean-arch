import { RouteInMemoryRepository } from './RouteInMemoryRepository';
import { RouteEntity } from "../../domain/RouteEntity";

describe('RouteInMemoryRepository', () => {
    test('Should save route in memory repository', async () => {
        const routeProps = {
            title: 'Minha rota',
            startPosition: { latitude: 0, longitude: 5 },
            endPosition: { latitude: 5, longitude: 10 }
        }
        const route = new RouteEntity(routeProps);

        const routeInMemoryRepository = new RouteInMemoryRepository();

        await routeInMemoryRepository.insert(route);
        expect(routeInMemoryRepository.items).toHaveLength(1);
        expect(routeInMemoryRepository.items).toStrictEqual([route]);



    });
});