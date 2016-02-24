const defaultDict = function(createDefault) {
    return new Proxy({}, {
        get: function(target, property, receiver) {
            if (!target.hasOwnProperty(property)) {
                target[property] = createDefault();
            }
            return target[property];
        }
    });
};
