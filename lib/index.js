
'use strict';

// Modules
var errors = require('otto-errors');

module.exports = {

  parameter_required : function (object, property) {

    return function (req, res, next) {
      // TODO: { class : 'parameter_required, data : 'email' }
      if ((!req[object]) || (!req[object][property])) { return next(new errors.ErrorBadRequest('Parameter "' + property + '" is required')); }
      return next();
    };

  }

};
