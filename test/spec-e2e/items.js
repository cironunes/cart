var protractor = require('protractor');
require('protractor/jasminewd');

describe('cart app: home page items', function () {
  var ptor;

  describe('visiting the home page', function () {
    ptor = protractor.getInstance();

    beforeEach(function () {
      ptor.get('/');
    });

    it('should redirect me to the home page and I should see a message', function() {
      ptor.findElement(
        protractor.By.repeater('item in items').row(1)).
        getText().then(function(text) {
          text = text.match(/.*/)[0].replace(' ','');
          expect(text).toEqual('Mazda');
        });
    });
  });
});
