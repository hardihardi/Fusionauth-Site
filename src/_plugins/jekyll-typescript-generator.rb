require 'digest'
require 'fileutils'

module Jekyll
  class TypescriptGenerator < Generator
    def generate(site)
      output = "#{site.source}/assets/js/fusionauth.js"
      input = "#{site.source}/_typescript/fusionauth.ts"

      if !File.exist?(output) || File.mtime(output) < File.mtime(input)
        system("browserify #{input} -p tsify  -o #{output}")
        site.static_files << Jekyll::StaticFile.new(site, site.source, "assets/js", "fusionauth.js")
      end
    end
  end
end
