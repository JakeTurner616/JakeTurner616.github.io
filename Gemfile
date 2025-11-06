# frozen_string_literal: true

source "https://rubygems.org"

ruby "~> 3.2"

gem "rake"   # ✅ required for building native gems like google-protobuf

%w[csv base64 bigdecimal date digest io-nonblock io-wait json openssl set stringio time zlib].each { |lib| gem lib }

gem "jekyll-theme-chirpy", "~> 5.2", ">= 5.2.1"

group :test do
  gem "html-proofer", "~> 3.18"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "webrick", "~> 1.7"
gem "jekyll-redirect-from"
gem "jekyll-target-blank"