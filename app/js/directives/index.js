module.exports = exports = function(app){
  require( __dirname + '/template_nav')(app);
  require( __dirname + '/template_main')(app);
  require( __dirname + '/template_footer')(app);

  //Views
  require( __dirname + '/project/view_project')(app);

  //Cards or Modules
  // require( __dirname + '/card_project')(app);

};
