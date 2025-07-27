// Google Sheets integration utility
// This file contains the Google Apps Script code that needs to be deployed separately

/*
To set up Google Sheets integration:

1. Go to https://script.google.com/
2. Create a new project
3. Replace the default code with the code below
4. Deploy as a web app with the following settings:
   - Execute as: Me
   - Who has access: Anyone
5. Copy the web app URL and replace the scriptUrl in WaitlistForm.tsx

Google Apps Script Code:
*/

export const GOOGLE_APPS_SCRIPT_CODE = `
function doPost(e) {
  try {
    // Get the spreadsheet by ID
    const SPREADSHEET_ID = '1x-lB1TZTgWfejfcagKbqW_du3sS4tmlqXexj_EoPPgM';
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Parse the request data
    const data = JSON.parse(e.postData.contents);
    
    // Get the current date and time
    const timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      timestamp
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Waitlist API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
`;

// Instructions for setting up the Google Sheet headers
export const SHEET_SETUP_INSTRUCTIONS = `
Google Sheet Setup Instructions:

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1x-lB1TZTgWfejfcagKbqW_du3sS4tmlqXexj_EoPPgM/edit

2. Make sure the first row contains these headers (in this exact order):
   - Column A: Name
   - Column B: Email_Id  
   - Column C: Phone_Number
   - Column D: Timestamp

3. The script will automatically append new entries starting from row 2.
`;