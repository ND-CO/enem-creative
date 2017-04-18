# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

#Directory Index
activate :directory_indexes


#CircleCI Staging
activate :s3_sync do |s3_sync|
  s3_sync.bucket                = 'staging.enemcreative.com'
  s3_sync.region                = 'us-east-1'
end


# Live Reload
configure :development do
 activate :livereload
end

  activate :minify_html do |html|
    html.remove_quotes = false
    html.remove_intertag_spaces = true
  end

configure :build do
  # activate :minify_css
  activate :minify_javascript
  activate :gzip
  
end

# Portfolio
page "portfolio/*", :layout => "portfolio"