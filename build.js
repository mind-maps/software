process.env.PLANTUML_HOME =  "node_modules/node-plantuml/vendor/plantuml_new.jar";
var plantuml = require('node-plantuml');
var fs = require('fs');
if (fs.existsSync(process.env.PLANTUML_HOME)) console.log("Path exists");
else console.log("Path doesn't exists. Using the jar in vendor folder.")
var gen = plantuml.generate("programming/dot-net/dotnet-web-performance.puml");
gen.out.pipe(fs.createWriteStream("out/output-file.png"));