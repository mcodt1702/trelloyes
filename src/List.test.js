import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './STORE'


describe ("List Component Suite", ()=>{

        it ('it renders withour crashing', ()=> {

            const div = document.createElement('div');

            ReactDOM.render(<App/>, div)

            ReactDOM.unmountComponentAtNode(div);

            })


        it('rendrs UI as expexted', ()=>{
            const tree = renderer
            .create(<List store ={STORE}/>)
            .toJSON()
            expect(tree).toMatchSnapShot();






        })



})