# The settings of package.json file in this react app will be depoyed to github
# To deploy to aws, change package.json into the following:
 ##delete "homepage", and "prebuild", "build" scripts
 ##add script     "deploy": "aws s3 sync build/ s3://todo-list-react"
