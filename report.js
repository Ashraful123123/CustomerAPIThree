const newman = require('newman'); //ami newman r jei pkg ta install korlam sheitake require korte hoi
//java te jeirokom import korte hoi,js a require korte hoi
newman.run({ 
 collection: require('./collection/CustomerAPIThree.postman_collection.json'), //  pointing to local JSON file. 
 environment: require('./collection/ThirdENV.postman_environment.json'), // pointing  to local env file 
 iterationCount: 1, 
 reporters: 'htmlextra', 
 reporter: { 
 htmlextra: { 
 export: './Reports/report.html', // If not specified, the file  will be written to `newman/` in the current working directory.  } 
 } 
  }
}, function (err) { 
 if (err) { throw err; } 
 console.log('collection run complete!'); 
});
