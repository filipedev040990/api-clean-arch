import { IRouteRepository } from '../domain/IRouteRepository';
import { LatLong, RouteEntity } from '../domain/RouteEntity';

export class CreateRouteUseCase {
    constructor(private routeRepository: IRouteRepository){}

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        const route = new RouteEntity(input);
        await this.routeRepository.insert(route);
        return route.toJson();
    }
}

type CreateRouteInput = {
    title: string;
    startPosition: LatLong;
    endPosition: LatLong;
    points?: LatLong[]
}

type CreateRouteOutput = {
    title: string;
    startPosition: LatLong;
    endPosition: LatLong;
    points?: LatLong[]
}