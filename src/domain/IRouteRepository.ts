import { RouteEntity } from './RouteEntity';

export interface IRouteRepository {
    insert(route: RouteEntity): Promise<void>;
    listAll(): Promise<RouteEntity[]>;
}