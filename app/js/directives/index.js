module.exports = exports = function(app){
  require( __dirname + '/template_nav')(app);
  require( __dirname + '/template_main')(app);
  require( __dirname + '/template_footer')(app);

};
