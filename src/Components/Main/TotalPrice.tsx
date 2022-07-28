type Props = {
    getTotalPrice: () => string
}

function TotalPrice({getTotalPrice}: Props) {
    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>

            <div>
                <span className="total-number">£{getTotalPrice()}</span>
            </div>
        </div>
    )
}

export default TotalPrice