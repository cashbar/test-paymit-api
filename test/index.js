var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

var URL = 'https://ppp.ti8m.ch/hackathon/swagger/';
describe('PAYMIT', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
	    var Swagger = require('swagger-client');

		var client = new Swagger({
		  url: URL + '/v2/swagger.json',
		  success: function() {
		    client.pet.getPetById({petId:7},{responseContentType: 'application/json'},function(pet){
		      console.log('pet', pet);
		    });
		  },
		  failed: function() {
		  	console.log('Failed');
		  }
		});
    });
  });
});
