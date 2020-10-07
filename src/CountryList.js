import React from 'react';
import axios from 'axios';

class CountryList extends React.Component {
    
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all').then(res => {
            const countries = res.data;
            this.setState({ countries });
        })
    }

    render() {
        return (
            <div className="countries">
                { this.state.countries.map(country =>
                <div className="country" style={{backgroundImage: 'url(' + country.flag + ')'}}>
                    <div className="country-name">
                        <span>{ country.translations.br }</span>
                        <span className="sub">( { country.nativeName } )</span>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default CountryList;