require('jasmine_dom_matchers');
import React from "react";
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
require('spy-on-render');

const $ = require('jquery');

Object.assign(global, {
    $, jQuery: $,
    React,
    ReactDOM,
    ReactTestUtils
});

beforeEach(() => {
    $('body').find('#root').remove().end().append('<div id="root"/>');
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(root);
});