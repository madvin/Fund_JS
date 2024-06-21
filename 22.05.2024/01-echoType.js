function echoType(target){
    if (typeof target === 'object') {
        console.log(typeof target);
        console.log('Parameter is not suitable for printing');
    } else {
        console.log(typeof target);
        console.log(target);
    }
}
echoType(null)