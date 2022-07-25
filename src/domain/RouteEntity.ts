export class RouteEntity {
    public props: RouteProps;
    constructor(props: RouteProps) {
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    updateTitle(title: string) {
        this.props.title = title;
    }

    updatePosition(startPosition: LatLong, endPosition: LatLong) {
        this.props.startPosition =  startPosition;
        this.props.endPosition = endPosition;
    }

    updatePoints(points:LatLong[]) {
        this.props.points = points;
    }

    toJson() {
        return this.props;
    }
}

export type RouteProps = {
    title: string;
    startPosition: LatLong;
    endPosition: LatLong;
    points?: LatLong[];
}

export type LatLong = {
    latitude: number;
    longitude: number;
}