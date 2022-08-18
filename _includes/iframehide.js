//this file is not sourced in a script tag
//hide iframe unless clicks link div
 $(document).ready(function(){
      $("#iframe2").hide();
      $("#Link").click(function(){
         $("#linkDiv").hide();
         $("#iframe2").show()
          return false;
      });
  });
//simple alert
if (confirm("Before proceeding, the user must acknowledge that the following page contains programs and software that are either old/unmaintained or are no longer in active development:\nFiles are strictly for academic/curiosity use only, and are not in any way intended to be shared or resourced in either development within projects, or by means of infringing proprietary software and its copy-prevention.")) {
    //user agrees proceed, do nothing
  } else {
    //go home
    window.location.href = "/";
  } 
