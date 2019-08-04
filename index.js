var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value){
  Object.assign({}, obj, {key: [value]});
  return object
}

  
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}


function deleteFromObjectByKey(object, key){
  var obj = { foo: 'bar' };
  var newObj = Object.assign({}, obj);
  delete newObj.foo;
  return newObj;
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

