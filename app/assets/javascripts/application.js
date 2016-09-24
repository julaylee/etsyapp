//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
<%= javascript_include_tag 'application', 'data-turbolinks-eval' => false %>
<%= javascript_include_tag params[:controller] %>

