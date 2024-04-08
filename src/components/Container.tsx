import { useState } from "react";
import { InfoCard } from "./InfoCard";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
import './Container.css';
import { useRef, useEffect } from "react";

export type CardInfo = {
    name: string,
    number: string,
    dateYY: string,
    dateMM: string,
    cvc: string
}
export function Container() {
    const [cardData, setCardData] = useState<CardInfo>({
        name: '',
        number: '',
        dateYY: '',
        dateMM: '',
        cvc: ''
    })
    const [errors, setErrors] = useState<string[]>([])
    const dialog = useRef<HTMLDialogElement | null>(null)
    const errorDialog = useRef<HTMLDialogElement | null>(null)

    const handleClick = () => {
        const errors = []
        if (cardData.cvc.length != 3) {
            errors.push("cvc")
        }
        if (cardData.dateMM.length != 2 || cardData.dateMM < "01" || cardData.dateMM > "12") {
            errors.push("Month")
        }
        if (cardData.dateYY.length != 2 || cardData.dateYY < "00" || cardData.dateYY > "99") {
            errors.push("Year")
        }
        if (cardData.number.length != 16 && cardData.number.length != 19) {
            errors.push("Number")
        }
        if (!cardData.name) {
            errors.push("Name")
        }
        // Czy składa się wyłącznie z liter i cyfr 

        if (/\d/.test(cardData.name)) {
            errors.push("Digits in name")
        }
        // Check if this is an email
        // if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        // Numer karty
        // Imie nazwisko
        console.log(errors)
        if (errors.length == 0) {
            dialog.current?.showModal()
        } else {
            showError(errors)
        }
    }

    const showError = (errors: string[]) => {
        setErrors(errors)
        errorDialog.current?.showModal()
    }

    const handleModalClick = (dialog: any) => {
        dialog.current?.close()
    }

    return (
        <main className="container">
            <dialog ref={dialog}>
                <div>Dziękujemy za podanie numeru karty!</div>
                <button onClick={() => handleModalClick(dialog)}>Zamknij</button>
            </dialog>
            <dialog ref={errorDialog}>
                <div>Dane nie są poprawne</div>
                <div>
                    {
                        errors?.map(e => (
                            <li>{e}</li>
                        ))
                    }
                </div>
                <button onClick={() => handleModalClick(errorDialog)}>Zamknij</button>
            </dialog>
            <section>
                <InfoCard cardData={cardData} setCardData={setCardData} ></InfoCard> {/* miejsce gdzie wpisujemy dane */}
                <button className="button" onClick={handleClick}>Confirm</button>
            </section>
            <section className="viewCard">
                <FrontCard cardData={cardData}></FrontCard> {/* v-- te dane mają trafić do FrontCard */}
                <BackCard cardData={cardData}></BackCard> {/* v-- te dane mają trafić do BackCard */}
            </section>
        </main>
    )
}

/*
Przycisk confirm sprawdza, czy wpisane dane są poprawne
    - Jeśli są poprawne, to wyświatla dialog
    - Jesli nie, to przy inputach dodaje informacje o błędzie

*/