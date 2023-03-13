function SnedToAllPeople() {
  var rangeOfData = 16;//應變數據
  var formInput="此次付款依據「學校所給資料」，故不另行表單確認";//應變數據
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getRange( 2, 1, 41, rangeOfData);
  var data = dataRange.getValues();
  for (var i in data) {
    MailApp.sendEmail(data[i][1]+"@fhsh.khc.edu.tw", "升學專款對帳通知", data[i][2]+" 你好~\n此為升學專款對帳通知，提供你確認款項是否有誤，此次扣款狀況如下：\n\n原先金額："+(data[i][rangeOfData-1]-data[i][rangeOfData-2])+"元\n第二次模考支出："+(data[i][rangeOfData-2])*-1+"元\n剩餘金額："+data[i][rangeOfData-1]+"元\n\n若扣款金額或原先金額有誤，亦或想查看先前帳目，請聯絡負責人，或回覆此郵件。\n若以上金額皆正確，請填寫表單完成對帳，感謝。\n"+formInput+"\n");
  }
}