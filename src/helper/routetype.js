import plane from '../assets/images/plane.png'
import ship from '../assets/images/ship.png'
import truck from '../assets/images/truck.png'

export const routeType = (type) => {
    if (type === 'maritime') { return ship }
    else if (type === 'aerien') { return plane }
    else if (type === 'routier') { return truck }
}