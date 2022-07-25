import { RouteEntity } from '../../domain/RouteEntity';
import { IRouteRepository } from '../../domain/IRouteRepository';

export class RouteInMemoryRepository implements IRouteRepository {    
    items:RouteEntity[] = [];

    async insert(route: RouteEntity): Promise<void>{
        this.items.push(route);
    }

    async listAll(): Promise<RouteEntity[]> {
        return this.items;
    }
}