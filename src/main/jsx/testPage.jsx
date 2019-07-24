import React from 'react';
import ReactDOM from 'react-dom';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class TestPage extends React.Component {

    render() {
        return <div className="testPage">test 페이지~~</div>;
    }

}

class TestPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {person: {}};
    }

    componentDidMount() {
        const tg = this;
        $.ajax({
            method: "GET",
            url: "/api/" + $('#pageName').data('id'),
            success: function (data) {
                tg.setState({person: data})
            },
            error: function (data) {
                console.log("실패");
                console.log(JSON.stringify(data));
            }
        })
    }

    render() {
        return <Person person={this.state.person}/>;
    }

}

class Person extends React.Component {
    render() {
        return (
            <div>
                <h2>확인 정보</h2>
                <h3>번호 : {this.props.person.idx}</h3>
                <h3>이름 : {this.props.person.name}</h3>
            </div>

        )
    }
}

ReactDOM.render(<div><TestPage/><TestPerson/></div>, document.getElementById('root'));