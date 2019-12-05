# To Sync cityofashevilleTEST/accela-masterscripts
The repo cityofasheville/accela-masterscripts is the correct version. 

## Set up a local repo with two remotes
git clone git@github.com:cityofasheville/accela-masterscripts.git
cd accela-masterscripts
git remote add testrepo git@github.com:cityofashevilleTEST/accela-masterscripts.git
git remote -v  *(should show 4 rows, from both repos)*

## Copy 
git pull -s ours testrepo master
git push testrepo master

To verify, on Github, you can do a pull request, which should have zero changes.