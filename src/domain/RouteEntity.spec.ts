import { RouteEntity, RouteProps, LatLong } from './RouteEntity';

describe('Route Entity', () => {
    test('should make constructor correctly', () => {
        let routeProps: RouteProps = {
            title: 'Minha rota',
            startPosition: { latitude: 0, longitude: 5 },
            endPosition: { latitude: 5, longitude: 10 }
        }
        let route = new RouteEntity(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps,points: []
        });
        
        routeProps = {
            title: 'Minha rota',
            startPosition: { latitude: 0, longitude: 5 },
            endPosition: { latitude: 5, longitude: 10 },
            points: [
                { latitude: 0, longitude: 5 },
                { latitude: 10, longitude: 15 }
            ]
        }

        route = new RouteEntity(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps,
            points: [
                { latitude: 0, longitude: 5 },
                { latitude: 10, longitude: 15 }
            ]
        });
    });

    test('Should update title correctly', () => {

        let routeProps = {
            title: 'Minha rota',
            startPosition: { latitude: 0, longitude: 5 },
            endPosition: { latitude: 5, longitude: 10 },
            points: [
                { latitude: 0, longitude: 5 },
                { latitude: 10, longitude: 15 }
            ]
        }

        const route = new RouteEntity(routeProps);

        route.updateTitle('New title');
        expect(route.props.title).toBe('New title');        
    });

    test('Should update startPosition and endPosition', () => {

        const routeProps = {
            title: 'Minha rota',
            startPosition: { latitude: 0, longitude: 5 },
            endPosition: { latitude: 5, longitude: 10 },
        }

        const route = new RouteEntity(routeProps);

        const newStartPosition: LatLong = {
            latitude: 25,
            longitude: 50
        }

        const newEndPosition: LatLong = {
            latitude: 40,
            longitude: 50
        }

        route.updatePosition(
            newStartPosition,
            newEndPosition
        );

        expect(route.props.startPosition).toBe(newStartPosition);
        expect(route.props.endPosition).toBe(newEndPosition);    
    });

    test('Should update points', () => {
        const routeProps = {
            title: 'Minha rota',
            startPosition: { latitude: 0, longitude: 5 },
            endPosition: { latitude: 5, longitude: 10 }
        }
        const route = new RouteEntity(routeProps);

        const points = [
            { latitude: 0, longitude: 5 }
        ];

        route.updatePoints(points);
        expect(route.props.points).toHaveLength(1);
        expect(route.props.points).toStrictEqual(points);




    })
})