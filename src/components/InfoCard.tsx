import './InfoCard.css';

export function InfoCard({ cardData, setCardData }: { cardData: any, setCardData: any }) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardData({ ...cardData, [e.target.id]: e.target.value })
    }

    return (
        <div className="infoCard">

            <div>
                <p className='paragraphName'>Cardholder Name</p>
                <input className='inputName'
                    id="name"
                    placeholder='e.g. Jane Appleseed'
                    onChange={handleChange}
                    value={cardData.name}
                />

                <p className='paragraphName'>Card Number</p>
                <input className='inputName'
                    id="number"
                    placeholder='e.g. 1234 5678 9123 0000'
                    onChange={handleChange}
                    value={cardData.number}
                />
            </div>
            <div className='numberPart'>
                <div className='numberPart-name'>
                    <p className='paragraphName'>Exp. Date (MM/YY)</p>
                    <p className='paragraphName'>CVC</p>
                </div>
                <div className='numberPart-number'>
                    <input className='inputDate'
                        id="dateMM"
                        placeholder='MM'
                        onChange={handleChange}
                        value={cardData.dateMM}
                    />

                    <input className='inputDate'
                        id='dateYY'
                        placeholder='YY'
                        onChange={handleChange}
                        value={cardData.dateYY}
                    />

                    <input className='inputCvc'
                        id="cvc"
                        placeholder='e.g. 123'
                        onChange={handleChange}
                        value={cardData.cvc}
                    />
                </div>
            </div>

        </div>
    )
}

//czym się różni export function od export default nazwa funkcji