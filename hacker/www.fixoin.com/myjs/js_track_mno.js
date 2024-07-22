$(document).ready(function(){
  $('#msearch').click(function(){
   $("#mtab tbody").empty();
   
   var CPMobNo= $('#mno').val();

   if (CPMobNo ==null || CPMobNo =="") {
        alert('Enter Mobile No.!');
   }
    else{
      var dataString1 = '&CPMobNo='+CPMobNo;
      $.ajax({
         url   : 'myphp/php_track_mno.php',
         async: false,
         type : 'GET',
         cache: false,
         data: dataString1,
         datatype: 'JSON',
         success : function(data){

                    //  $('#yourdiv').html(data);
                    var result = data.trim();
                    var results=JSON.parse(result);
             $.each(results, function(i,value){

              $('<tr>').html("<td>" 
               + results[i].TicketNo + "</td><td>"
               + results[i].DateTime + "</td><td>" 
               + results[i].CustName + "</td><td>"
               + results[i].issuetype + "</td><td>"
               + results[i].issue + "</td><td>"
               + results[i].IsuDetails + "</td><td>"
               + results[i].status + "</td><td>" 
               + results[i].Description +"</td>").appendTo('#mtab2'); 

                      });

            }
     });
     return false;
   }
});

});
