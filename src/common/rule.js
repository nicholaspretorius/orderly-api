function rule(user, context, callback) {
    user.app_metadata = user.app_metadata || {};
    // You can add a Role based on what you want
    // In this case I check domain
    var addRolesToUser = function(user, cb) {
      if (user.email && user.email === 'nicholaspretorius@gmail.com') {
        cb(null, ['admin']);
      } else {
        cb(null, ['user']);
      }
    };
  
    addRolesToUser(user, function(err, roles) {
      if (err) {
        callback(err);
      } else {
        user.app_metadata.roles = roles;
        auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
          .then(function(){
            context.accessToken['http://localhost:3000/roles'] = user.app_metadata.roles;
            callback(null, user, context);
          })
          .catch(function(err){
            callback(err);
          });
      }
    });
  }