import {configure} from "enzyme";
import chai from 'chai';
import {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Adapter from 'enzyme-adapter-react-16'
// var mocha = require("mocha");
// var {expect} = require("chai");
// var chaiEnzyme = require("chai-enzyme");
// var Adapter = require("enzyme-adapter-react-16");

export class myCrap  {
  public mine:string = 'who';
}

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('App renders main message', () => {
    const mine = "mine"
    const yours = "mine"
    expect(mine).to.equal(yours);

});

it('should say false at the end', () => {
  const mybool = false;
  expect(mybool).to.equal(false);
})

  chai.use(chaiEnzyme())

})