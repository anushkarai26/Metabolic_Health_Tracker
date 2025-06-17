function emailDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Dashboard");
  const url = ss.getUrl().replace(/edit$/, '');
  const pdfUrl = url + `export?format=pdf&gid=${sheet.getSheetId()}&portrait=true&fitw=true&sheetnames=false&printtitle=false&pagenumbers=false&gridlines=false`;

  const options = {
    headers: { 'Authorization': 'Bearer ' + ScriptApp.getOAuthToken() }
  };

  const blob = UrlFetchApp.fetch(pdfUrl, options).getBlob().setName("Metabolic_Health_Report.pdf");

  const email = "anushkaaaa26@gmail.com";  
  MailApp.sendEmail({
    to: email,
    subject: "Your Monthly Metabolic Health Dashboard",
    body: "Attached is your personalized health report for this month!",
    attachments: [blob]
  });
}