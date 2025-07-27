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
    console.log('doPost function called');
    console.log('Request type:', e.postData ? e.postData.type : 'No postData');
    console.log('Full request object:', JSON.stringify(e, null, 2));
    
    // Your Google Sheet ID
    const SPREADSHEET_ID = '1bk4xsTI5c9IDJzk3aGkwasFZ8dQB5LTBSJJ9ViypN9Y';
    console.log('Using spreadsheet ID:', SPREADSHEET_ID);
    
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Sheet1') || spreadsheet.getActiveSheet();
    console.log('Sheet accessed successfully');
    
    // Parse the request data - handle both FormData and JSON
    let data;
    if (e.postData && e.postData.type === 'application/x-www-form-urlencoded') {
      // Handle FormData
      console.log('Processing FormData');
      const params = e.parameter;
      data = {
        name: params.name,
        email: params.email,
        phone: params.phone
      };
    } else if (e.postData && e.postData.contents) {
      // Handle JSON
      console.log('Processing JSON data');
      data = JSON.parse(e.postData.contents);
    } else {
      // Handle URL parameters as fallback
      console.log('Processing URL parameters');
      data = {
        name: e.parameter.name,
        email: e.parameter.email,
        phone: e.parameter.phone
      };
    }
    
    // Log the received data for debugging
    console.log('Parsed data:', JSON.stringify(data, null, 2));
    
    // Validate data
    if (!data.name || !data.email || !data.phone) {
      throw new Error('Missing required fields: ' + JSON.stringify(data));
    }
    
    // Check if headers exist, if not add them
    const lastRow = sheet.getLastRow();
    console.log('Current last row:', lastRow);
    
    if (lastRow === 0) {
      console.log('Adding headers to sheet');
      sheet.appendRow(['Name', 'Email_Id', 'Phone_Number', 'Timestamp']);
    }
    
    // Append the data to the sheet
    const newRow = [
      data.name,
      data.email,
      data.phone,
      new Date()
    ];
    
    console.log('Adding row:', JSON.stringify(newRow, null, 2));
    sheet.appendRow(newRow);
    
    console.log('Data successfully added to sheet');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Script error:', error.toString());
    console.error('Error stack:', error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Test function to verify the script is working
  try {
    console.log('doGet function called');
    const SPREADSHEET_ID = '1bk4xsTI5c9IDJzk3aGkwasFZ8dQB5LTBSJJ9ViypN9Y';
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Sheet1') || spreadsheet.getActiveSheet();
    console.log('Sheet access test successful');
    
    return ContentService
      .createTextOutput('STORYO Waitlist API is running. Sheet access: OK')
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    console.error('doGet error:', error.toString());
    return ContentService
      .createTextOutput('STORYO Waitlist API Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}


// Instructions for setting up the Google Sheet headers
export const SETUP_INSTRUCTIONS = `
COMPLETE SETUP INSTRUCTIONS:

STEP 1: Create Google Apps Script
1. Go to https://script.google.com/
2. Click "New Project"
3. Delete the default code and paste the GOOGLE_APPS_SCRIPT_CODE from above
4. Save the project (Ctrl+S) and give it a name like "STORYO Waitlist"

STEP 2: Deploy the Script
1. Click "Deploy" > "New deployment"
2. Click the gear icon next to "Type\" and select \"Web app"
3. Set the following:
   - Description: "STORYO Waitlist Form"
   - Execute as: "Me"
   - Who has access to the app: "Anyone"
4. Click "Deploy"
5. Copy the "Web app URL\" that appears
6. Replace the scriptUrl in WaitlistForm.tsx with this URL

STEP 3: Set up Google Sheet
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1bk4xsTI5c9IDJzk3aGkwasFZ8dQB5LTBSJJ9ViypN9Y/edit
2. Make sure you have a sheet named "Sheet1" (or it will use the active sheet)
3. The script will automatically add headers: Name, Email_Id, Phone_Number, Timestamp
4. Make sure the sheet is accessible (not restricted)

STEP 4: Test the Integration
1. Submit a test form entry
2. Check if data appears in your Google Sheet
3. If there are issues, check the Apps Script logs: https://script.google.com/ > Your project > Executions

IMPORTANT NOTES:
- The Google Apps Script must be deployed with "Anyone\" access
- The Google Sheet must be accessible to the script
- You may need to authorize the script the first time it runs
- Check the Apps Script execution logs if data isn't appearing
`;

export const TROUBLESHOOTING = `
TROUBLESHOOTING GUIDE:

If data is not appearing in your Google Sheet:

1. CHECK SCRIPT DEPLOYMENT:
   - Go to https://script.google.com/
   - Open your project
   - Click "Deploy" > "Manage deployments"
   - Ensure "Who has access" is set to "Anyone"
   - Copy the correct Web app URL

2. CHECK SCRIPT PERMISSIONS:
   - Run the script manually once in the Apps Script editor
   - Authorize all required permissions
   - Check "Executions\" tab for any errors

3. CHECK GOOGLE SHEET:
   - Ensure the sheet ID in the script matches your sheet
   - Make sure the sheet is not restricted/private
   - Try creating a test entry manually

4. CHECK BROWSER CONSOLE:
   - Open browser developer tools (F12)
   - Look for any error messages when submitting the form
   - Check if the fetch request is being made

5. TEST THE SCRIPT DIRECTLY:
   - Visit your Web app URL in a browser
   - You should see "STORYO Waitlist API is running"
   - If not, the deployment has issues

Common Issues:
- Script not deployed or wrong URL
- Permissions not granted to the script
- Google Sheet ID mismatch
- CORS issues (should be resolved with proper deployment)
`;

// The actual script URL will need to be updated after deployment
export const SCRIPT_URL_PLACEHOLDER = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';