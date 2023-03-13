function howMuchMoney() {
  var data = SpreadsheetApp.getActiveSheet().getRange( 50, 2, 1, 1).getValues();
  if(data[0][0]<=11480){
    MailApp.sendEmail("910231@fhsh.khc.edu.tw","餘額不足","收學專款剩下:"+data[0][0]+"元");
  }else{
    MailApp.sendEmail("910231@fhsh.khc.edu.tw","餘額通知","收學專款剩下:"+data[0][0]+"元");
  }
}