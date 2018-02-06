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


#Directory Index
activate :directory_indexes

# Webpack
activate :external_pipeline,
  name: :webpack,
  command: build? ? './node_modules/webpack/bin/webpack.js --bail' :
                    './node_modules/webpack/bin/webpack.js --watch -d --color',
  source: ".tmp/dist",
  latency: 1


configure :build do
    # Minify & GZIP
    activate :minify_css
    activate :gzip
    activate :minify_html
  
  end


# Live Reload
configure :development do
 activate :livereload
end

# Portfolio
page "portfolio/*", :layout => "portfolio"