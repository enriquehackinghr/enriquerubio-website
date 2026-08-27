const SHEET_ID = "1b5yhcH4ROHG3iKRsF2jhxbwPz5lxeY74fEYGaoYK7KU";

function doGet() {
  return json_({ ok: true });
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const tabName = payload.tab || (payload.type === "newsletter" ? "Newsletter" : "Submissions");
    const headers = payload.headers || [];
    const sheet = getOrCreateSheet_(spreadsheet, tabName, headers);

    if (payload.row && payload.row.length) {
      sheet.appendRow(payload.row);
    }

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function getOrCreateSheet_(spreadsheet, tabName, headers) {
  let sheet = spreadsheet.getSheetByName(tabName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(tabName);
  }

  if (headers.length && sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  return sheet;
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
