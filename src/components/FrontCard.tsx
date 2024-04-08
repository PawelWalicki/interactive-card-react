import { CardInfo } from "./Container"
import './FrontCard.css';
import { useState, useEffect } from "react";

export function FrontCard({ cardData }: { cardData: CardInfo }) {

    return (
        <div className="frontCard">
            <div className="logo"><svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" /><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" />
            </svg></div>
            <div className="numberCard">
                  {cardData.number ? cardData.number : "1234 5678 9012 3456"}
            </div>
            <div className="personalCard">
                <div>
                    {cardData.name ? cardData.name : "Jan Kowalski"}
                </div>
                <div>
                    {cardData.dateMM ? cardData.dateMM : "12"}/{cardData.dateYY ? cardData.dateYY : "12"}
                </div>
            </div>

        </div>
    )
}