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
            <React.Fragment>
                <input class="country-input"type="radio" id={this.props.country.alpha3Code} name="country" value={this.props.country.alpha3Code} />
                <label htmlFor={this.props.country.alpha3Code} className="country" style={{ backgroundImage: 'url(' + this.props.country.flag + ')' }}>
                    <input type="radio" id={this.props.country.alpha3Code + 'close'} name="country" value={this.props.country.alpha3Code + 'close'} />
                    <label htmlFor={this.props.country.alpha3Code + 'close'} className="close-label"><span>[ Click here to close ]</span></label>
                    <div className="country-name">
                        <span>{ this.props.country.name }</span>
                        <span className="sub">( { this.props.country.nativeName } )</span>
                    </div>
                    <div className="country-info">
                        <div className="arrow"></div>
                        <h2 className="name">{ this.props.country.name }</h2>
                        <div className="content">
                            <table>
                                <tr>
                                    <td>Capital&nbsp;-&nbsp;</td>
                                    <td>{ (this.props.country.capital) ? this.props.country.capital : 'Not informed' }</td>
                                </tr>
                                <tr>
                                    <td>Region&nbsp;-&nbsp;</td>
                                    <td>{ (this.props.country.region) ? (this.props.country.region + ' ' + ((this.props.country.subregion) ? '(' + this.props.country.subregion + ')' : '')) : 'Not informed' }</td>
                                </tr>
                                <tr>
                                    <td>Population&nbsp;-&nbsp;</td>
                                    <td>{ (this.props.country.population).toLocaleString('en-US') }</td>
                                </tr>
                                <tr>
                                    <td>Area&nbsp;-&nbsp;</td>
                                    <td>{ (this.props.country.area) ? (this.props.country.area).toLocaleString('en-US') + ' km\u00B2' : 'Not informed' }</td>
                                </tr>
                                <tr>
                                    <td>Currency&nbsp;-&nbsp;</td>
                                    <td>{ this.props.country.currencies[0].name }</td>
                                </tr>
                                <tr>
                                    <td>Languages&nbsp;-&nbsp;</td>
                                    <td>{ this.format(this.getLanguages(this.props.country.languages)) }</td>
                                </tr>
                                <tr>
                                    <td>Borders&nbsp;-&nbsp;</td>
                                    <td>{ (this.props.country.borders.length !== 0) ? this.format(this.getCountriesNames(this.props.country.borders)) : 'None' }</td>
                                </tr>
                                <tr>
                                    <td>Timezones&nbsp;-&nbsp;</td>
                                    <td>{ this.format(this.props.country.timezones) }</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </label>
            </React.Fragment>
        )
    }
}

export default Country;