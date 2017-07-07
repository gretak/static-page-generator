module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper('key', function (name)  {
    return 'glance-customerbase-key-' + name;
  });

  Handlebars.registerHelper('social', function (name)  {
    return 'icon-social-' + name;
  });

};
