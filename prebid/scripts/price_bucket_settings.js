const customConfigObject = {
"buckets" : [{
"precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
"min" : 0,
"max" : 2,
"increment" : 0.01  // from $0 to $5, 1-cent increments
},
{
"precision": 2,
"min" : 2.1,
"max" : 20,
"increment" : 0.10  // from $5 to $20, round down to the previous 10-cent increment
}] 
};  