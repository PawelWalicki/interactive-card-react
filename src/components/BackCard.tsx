import { CardInfo } from "./Container"
import './BackCard.css';

export function BackCard({ cardData }: { cardData: CardInfo }) {

    return (
        <div className="backCard ">
            {cardData.cvc ? cardData.cvc : "800"}
        </div>
    )

}