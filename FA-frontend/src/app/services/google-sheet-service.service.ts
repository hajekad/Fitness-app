import { Injectable } from '@angular/core';
import { google, GoogleApis } from 'googleapis';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {
  private sheets: any;

  constructor() {
    this.sheets = google.sheets('v4');
  }

  public async getUsers() {
    console.log("fohhh");
    const authClient = await this.authorize();
    const request = {
      // The ID of the spreadsheet to retrieve data from.
      spreadsheetId: '1kA7qpC_RW0GxpI5rEHydTyENCV7LyGVn-cDNUSyAMVI', // TODO: Update placeholder value.
      // The A1 notation of the values to retrieve.
      range: 'walks',  // TODO: Update placeholder value.

      // How values should be represented in the output.
      // The default render option is ValueRenderOption.FORMATTED_VALUE.
      valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

      // How dates, times, and durations should be represented in the output.
      // This is ignored if value_render_option is
      // FORMATTED_VALUE.
      // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
      dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.

      auth: authClient,
      key: "AIzaSyA_ixf-q098Y6H2vzn0Bl-K3JpK6VUaH4c",
    };

    try {
      const response = (await this.sheets.spreadsheets.values.get(request)).data;
      // TODO: Change code below to process the `response` object:
      console.log(JSON.stringify(response, null, 2));
    } catch (err) {
      console.error(err);
    }
  }

  private async authorize() {
  }
}