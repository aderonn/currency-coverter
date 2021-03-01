import React from "react";


class Converter extends React.Component {
    state = {
        currency1:'USD',
        quantity: 1,
        exchangeRates: [],
    }

    componentDidMount() {
        this.setActiveCurrency(this.state.currency1)
    }

    fetchRatesForCurrency = (currency) => {
        return fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
            .then(response => response.json())
            .then(({rates}) => Object.entries(rates).map(([currency, rate]) => ({currency, rate})))           
    }

    setActiveCurrency = async (currency) => {
        this.setState({currency1 : currency})
        const exchangeRates = await this.fetchRatesForCurrency(currency)
        this.setState({exchangeRates})
    }

    get currencyList(){
        return this.state.exchangeRates.map((e) => e.currency)
    }
    
    render() {
        const { 
            state: {currency1, exchangeRates, quantity},
            currencyList,
        } = this;

        return (
            <div className="currency-block">
                <div className="currencyCount">Введите количество:</div>
                <input 
                    id="currencyCount" 
                    type='text' 
                    onChange={(e) => this.setState({quantity : e.target.value})} 
                    value={quantity}
                />
                <select 
                    value={currency1}
                    name="select" 
                    onChange={(e) => {
                        this.setActiveCurrency(e.target.value)
                        console.log(e.target.value)
                    }}
                > 
                    {currencyList.map((currency) => (
                        <option value={currency}>{currency}</option>
                    ))}
                </select>
                <div className="list">
                    {exchangeRates.map(({currency, rate}) => (
                        <div className='list-items'>
                        <div>{`${currency}:`}</div>
                        <div>{`${(quantity * rate).toFixed(2)}`}</div>
                        </div>
                    ))}
                </div>
               {/* <div className="result">{this.state.result}{Array.from(this.state.currency2)}</div> */}
            </div>  
        )
    }
}

export {Converter}