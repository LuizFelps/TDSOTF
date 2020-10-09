import React from 'react';
import axios from 'axios';
import Country from './Country';

class CountryList extends React.Component {
    
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all').then(res => {
            const countries = res.data;
            this.setState({countries});
        })
    }


    render() {
        var c = [];
        this.state.countries.map((country) => {
            return c.push({code: country.alpha3Code, name: country.name})
        });
        return (
            <div className="countries">
                { this.state.countries.map(country => <Country key={country.name} country={country} countries={c} />) }
            </div>
        )
    }
}

export default CountryList;