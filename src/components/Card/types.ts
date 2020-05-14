type StickCard = '♥' | '♠' | '♦' | '♣'

export interface CardProps {
    stick: StickCard | string;
    rank: number;
}
