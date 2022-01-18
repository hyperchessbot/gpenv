const config = {

}


const e = (Object.keys(config).map(key => `gp env ${key}=${config[key]}`).join("\n"))
require("fs").writeFileSync("temp.sh", e)
