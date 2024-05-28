/**
 * Created by defnx on 19/03/17.
 */
const Jasmine = require('jasmine');

const jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.execute();
