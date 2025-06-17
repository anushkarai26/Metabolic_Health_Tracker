function onFormSubmit(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const formSheet = ss.getSheetByName("Form Responses 2");
  const healthSheet = ss.getSheetByName("Health_Data");

  const lastRow = formSheet.getLastRow();
  const lastCol = formSheet.getLastColumn();

  if (lastRow < 2) return; // Skip if no data

  const values = formSheet.getRange(lastRow, 1, 1, lastCol).getValues()[0];
  healthSheet.appendRow(values); // Derived columns will auto-calculate via formulas
}
