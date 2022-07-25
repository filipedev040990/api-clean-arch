import { RouteEntity } from '../domain/RouteEntity';
import { IRouteRepository } from '../domain/IRouteRepository';
import { LatLong } from '../domain/RouteEntity';

export class ListRoutesUseCase {
    constructor(private repository: IRouteRepository){}

    async execute(): Promise<CreateRouteOutput> {
        const routes = await this.repository.listAll();
        return routes.map(r => r.toJson());
    }
}

type CreateRouteOutput = {
    title: string;
    startPosition: LatLong;
    endPosition: LatLong;
    points?: LatLong[]
}[]