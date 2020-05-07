import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card';
import List from './List';
import renderer from 'react-test-renderer';




describe('Card Componen Suite', () =>{
    it ('renders without crashing', ()=>{

        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);

        ReactDOM.unmountComponentAtNode(div);
            }   
    )

    it ('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card
            key= {4}
            title= 'any'
            content= 'any content'
          />)
        .toJSON();
        expect(tree).toMatchSnapshot()


    })





})