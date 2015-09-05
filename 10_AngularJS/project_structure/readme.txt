Many angular tutorial suggest structure the folder by type[2-3]. But the best way is sorting folder by feature[1]:

project/
---- components/
-------- home/
------------ home.ctrl.js
------------ home.directive.js
------------ home.service.js
------------ home.tpl.html
-------- login/
-------- aboutus/
-------- app.module.js
-------- app.routes.js
---- assets/
---- index.html

Refer to my structure for more details.(Open index.html by FF)

Ref:
[1] http://www.trialomics.com/blog/2015/6/30/creating-directory-structures-for-efficient-angularjs-applications
[2] https://scotch.io/tutorials/angularjs-best-practices-directory-structure
[3] http://stackoverflow.com/questions/18542353/angularjs-folder-structure
[4] https://github.com/angular/angular-seed.git