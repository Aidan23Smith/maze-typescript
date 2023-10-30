export interface IPosition {
    row: number;
    column: number;
}

export function isEqualTo(position: IPosition, otherPosition: IPosition) {
    return position.row == otherPosition.row && position.column == otherPosition.column;
}
