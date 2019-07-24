import React from 'react';
import ReactDOM from 'react-dom';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


// const client = require('./client');
//

// const request = require('request');
//
// request('/api/member', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

class TestPlus extends React.Component{
    constructor(props) {
        super(props);
        this.state = {test: []};
    }

    render() {
        return <div className="main">메인 페이지</div>;
    }
}


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {people: []};
    }

    componentDidMount() {
        // client({method: 'GET', path: '/api/getPeople'}).done(response => { //...? 화면은 먼저 불러와서 마운트 하고 데이터를 꼭 이렇게 ajax처럼 계속 따로 불러와야 하는건가? 이러면 data rest 쓰는게 낫잖아 명확히..
        //     console.log(JSON.stringify(response));
        //     this.setState({people: response.entity._embedded.people});
        // });

        // const peo = [
        //     {
        //         idx: 1,
        //         name: 'tester01'
        //     },
        //     {
        //         idx: 2,
        //         name: 'tester02'
        //     }
        // ]
        // console.log(peo);
        // console.log(JSON.stringify(peo));
        // this.setState({people: peo})


        const tg = this;

        $.ajax({
            method: "POST",
            url: "/api/getPeople",
            success: function(data){
                tg.setState({people:  data})
            },
            error: function(data){
                console.log("실패");
                console.log(JSON.stringify(data));
            }
        })


    }

    render() {
        // return <div className="main">메인 페이지</div>;
        return <PeopleList people={this.state.people}/>;
    }

}


class PeopleList extends React.Component {
    render() {
        const people = this.props.people.map(person =>
            <Person key={person.idx} person={person}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>IDX</th>
                    <th>Name</th>
                </tr>
                {people}
                </tbody>
            </table>
        )
    }
}

class Person extends React.Component {
    render() {
        return (
            <tr>
                <td><a href={this.props.person.idx}>{this.props.person.idx}</a></td>
                <td>{this.props.person.name}</td>
            </tr>
        )
    }
}



ReactDOM.render(<div><MainPage/><TestPlus/></div>, document.getElementById('root'));