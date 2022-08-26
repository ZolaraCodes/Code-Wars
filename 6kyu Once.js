function once(fn) {
    var flag = true;
    return function(){
      if(flag) {
        flag = false;
        return fn.apply(this, arguments);
      }
      return;
    };
}