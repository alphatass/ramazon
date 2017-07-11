const {OperationHelper} = require('apac');

const opHelper = new OperationHelper({
	awsId:     '940733266516',
    awsSecret: 'mwNp6044MTNl6CdclyorcGdFIVom5bL9VjLZn4X9',
    assocId:   'atchotes-20'
});

opHelper.execute('ItemSearch', {
  'SearchIndex': 'Books',
  'Keywords': 'harry potter',
  'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
    console.log("Results object: ", response.result);
    console.log("Raw response body: ", response.responseBody);
}).catch((err) => {
    console.error("Something went wrong! ", err);
});