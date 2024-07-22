$(document).ready(function(){
  $('#search').click(function(){
   $("#tmob tbody").empty();
   
   var TicketNo= $('#tno').val();

   if (TicketNo ==null || TicketNo =="") {

        alert('Enter Ticket No.!');
   }
    else{
      var dataString1 = '&TicketNo='+TicketNo;
      $.ajax({
         url   : 'myphp/php_track_tno.php',
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
               + results[i].issuetype + "</td><td>"
               + results[i].issue + "</td><td>"
               + results[i].IsuDetails + "</td><td>"
               + results[i].status + "</td><td>" 
               + results[i].Description +"</td>").appendTo('#tmob2'); 

                      });

            }
     });
     return false;
   }
});

});
