import React from 'react';

class Country extends React.Component {

    format(array) {

        var result = "";
        array.map((element, index) => {
            return (
                (array.length === 1)
                ? result = element
                : (index === array.length - 2)
                ? result += element + ' and '
                : (index !== array.length - 1)
                ? result += element + ', '
                : result += element + ''
            )
        });

        return result;
    }

    getLanguages(array) {

        var languages = [];
        array.map(lang => {
            return (languages.push(lang.name));
        });

        return languages;
    }

    getCountriesNames(codes) {
        
        var borders = [];
        this.props.countries.map(({code, name}) => {
            return (codes.includes(code) ? borders.push(name) : undefined)
        });

        return borders;
    }

    render() {

        return (
            <div className="country" style={{ backgroundImage: 'url(' + this.props.country.flag + ')' }}>
                <div className="country-name">
                    <span>{ this.props.country.name }</span>
                    <span className="sub">( { this.props.country.nativeName } )</span>
                </div>
                <div className="country-info">
                    <h2 className="name">{ this.props.country.name }</h2>
                    <div className="content">
                        <div className="section">
                            <span><b>Capital:</b> { (this.props.country.capital) ? this.props.country.capital : 'Not informed' }</span>
                            <span><b>Region:</b> { (this.props.country.region) ? (this.props.country.region + ' ' + ((this.props.country.subregion) ? '(' + this.props.country.subregion + ')' : '')) : 'Not informed' }</span>
                            <span><b>Population:</b> { (this.props.country.population).toLocaleString('en-US') }</span>
                            <span><b>Area:</b> { (this.props.country.area) ? (this.props.country.area).toLocaleString('en-US') + ' km\u00B2' : 'Not informed' }</span>
                            <span><b>Currency:</b> { this.props.country.currencies[0].name }</span>
                            <span><b>Language(s):</b> { this.format(this.getLanguages(this.props.country.languages)) }</span>
                        </div>
                        <div className="section">
                            <span><b>Shared borders:</b> { (this.props.country.borders.length !== 0) ? this.format(this.getCountriesNames(this.props.country.borders)) : 'None' }</span>
                            <span><b>Timezones:</b> { this.format(this.props.country.timezones) }</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Country;