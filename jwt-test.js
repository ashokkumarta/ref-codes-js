jwt = require ('./jwt-check/jwt-check'); 

my_token_valid = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJURVNUMSIsImVtYWlsIjoiVEVTVDFAc2hhbm11Z2EuY29tIiwibmFtZSI6IlRFU1QxLCBURVNUMSIsImFsbG93ZWQtYWN0aW9ucyI6WyJTRC1QLVJHLVJXIiwiU0QtUC1BQi1SIiwiU0QtUC1YWS1SIl0sImFsbG93ZWQtZGF0YSI6WyJTRDAwMSJdLCJpc3MiOiJodHRwczovL2xhYi5zaGlub3ZhLmluLyIsImlhdCI6MTc0MjI3MzI1MCwiZXhwIjoyMjgyMjczMjUwLCJqdGkiOiI1NzU1ZWNiZC05YjhmLTQ1MmUtYjE4My1jMWY3NjA4ZGIxMDYifQ.egLe09AyRw3k_aOvkPF1KrePo7AxLZ-M9osPB7rxoKpapb5ZrNdma3FBpq50KrUiD67wHvWUFJdSKy9a6rZ3ItW_XsjAqnYLBK5H04GoNhEyqK2BtkdYoUlbMMEfqWvdtl0Cb4TalR2socCCYN76RF571rVjvdDZOneKXpX91W1PcID7UVQ-r21U6lsA6vLfkPBjcqUxx8ZVVoiHinUxdC0eHpF0O2PQSVKbRG_-uN2wzUn35la26Xld9gjr_8HGBbDwsvbW_qiOiO2So_NLsia3P6pmPvztpD0aPap-bxsOATyGQwGMMeFJpKIao3Apb6VNwjigwsj0YdbhKySUng';
my_token_expired = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbXAwMDEiLCJlbWFpbCI6ImVtcDAwMUBzaGFubXVnYS5jb20iLCJuYW1lIjoiRW1wLCAwMDEiLCJhbGxvd2VkLWFjdGlvbnMiOlsiU0RSR1JXIiwiU0RBQlIiLCJTRFhZUiJdLCJhbGxvd2VkLWRhdGEiOlsiU0QwMDEiXSwiaXNzIjoiaHR0cHM6Ly9sYWIuc2hpbm92YS5pbi8iLCJpYXQiOjE3NDIxOTAzNjgsImV4cCI6MTc0MjE5MjE2OCwianRpIjoiZTBmYzAzNTAtMTU3Yy00ZGJjLThjYWQtNjYyNmMwYWNkOWE0In0.GwdBTdTsvuXR7psGvX4t5O2uXJFIxbEMpv60AtZ5ZCgeXVr9OIYX7a6-zn9u2EzdzPupLy-LUjhLUDqFnJEXpwA56ly9yG0S-DDkxlIbgvqRZcI1Ng--cGakTfhJh5NclRSoXzzT8dHoD-Im0sXSbzs3ZlohAn6e0_kXncswWexjEfb_7lPleIWd4CiYigEB_GmtsHSPNoZWPKmIcTUx-KS0ZP1--B0DVsjVOx0Yz-9qWWKXcXEUp98VcJKtAJYlbnZ6CmUY5-w9O_tZbjdaRi_gqAvHA6uTSBkWE4b4p-tjb-tlscgDdpHxb2Yb1_J-BQ-nafdT-M7UEeiyNlx14w';
my_token_invalid = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9eyJhdWQiOiJlbXAwMDEiLCJlbWFpbCI6ImVtcDAwMUBzaGFubXVnYS5jb20iLCJuYW1lIjoiRW1wLCAwMDEiLCJhbGxvd2VkLWFjdGlvbnMiOlsiU0RSR1JXIiwiU0RBQlIiLCJTRFhZUiJdLCJhbGxvd2VkLWRhdGEiOlsiU0QwMDEiXSwiaXNzIjoiaHR0cHM6Ly9sYWIuc2hpbm92YS5pbi8iLCJpYXQiOjE3NDIxOTAzNjgsImV4cCI6MTc0MjE5MjE2OCwianRpIjoiZTBmYzAzNTAtMTU3Yy00ZGJjLThjYWQtNjYyNmMwYWNkOWE0In0GwdBTdTsvuXR7psGvX4t5O2uXJFIxbEMpv60AtZ5ZCgeXVr9OIYX7a6-zn9u2EzdzPupLy-LUjhLUDqFnJEXpwA56ly9yG0S-DDkxlIbgvqRZcI1Ng--cGakTfhJh5NclRSoXzzT8dHoD-Im0sXSbzs3ZlohAn6e0_kXncswWexjEfb_7lPleIWd4CiYigEB_GmtsHSPNoZWPKmIcTUx-KS0ZP1--B0DVsjVOx0Yz-9qWWKXcXEUp98VcJKtAJYlbnZ6CmUY5-w9O_tZbjdaRi_gqAvHA6uTSBkWE4b4p-tjb-tlscgDdpHxb2Yb1_J-BQ-nafdT-M7UEeiyNlx14w';
my_token_invalid2 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbXAwMDEiLCJlbWFpbCI6ImVtcDAwMUBzaGFubXVnYS5jb20iLCJuYW1lIjoiRW1wLCAwMDEiLCJhbGxvd2VkLWFjdGlvbnMiOlsiU0RSR1JXIiwiU0RBQlIiLCJTRFhZUiJdLCJhbGxvd2VkLWRhdGEiOlsiU0QwMDEiXSwiaXNzIjoiaHR0cHM6Ly9sYWIuc2hpbm92YS5pbi8iLCJpYXQiOjE3NDIxOTAzNjgsImV4cCI6MTc0MjE5MjE2OCwianRpIjoiZTBmYzAzNTAtMTU3Yy00ZGJjLThjYWQtNjYyMwYWNkOWE0In0.GwdBTdTsvuXR7psGvX4t5O2uXJFIxbEMpv60AtZ5ZCgeXVr9OIYX7a6-zn9u2EzdzPupLy-LUjhLUDqFnJEXpwA56ly9yG0S-DDkxlIbgvqRZcI1Ng--cGakTfhJh5NclRSoXzzT8dHoD-Im0sXSbzs3ZlohAn6e0_kXncswWexjEfb_7lPleIWd4CiYigEB_GmtsHSPNoZWPKmIcTUx-KS0ZP1--B0DVsjVOx0Yz-9qWWKXcXEUp98VcJKtAJYlbnZ6CmUY5-w9O_tZbjdaRi_gqAvHA6uTSBkWE4b4p-tjb-tlscgDdpHxb2Yb1_J-BQ-nafdT-M7UEeiyNlx14w';

// Invalid token - 2
try {
    user = jwt.validate(my_token_invalid2);
    console.log('Valid user: ', user);
} catch (err) {
    console.log('Invalid user: ', err);
}

// Invalid token
try {
    user = jwt.validate(my_token_invalid);
    console.log('Valid user: ', user);
} catch (err) {
    console.log('Invalid user: ', err);
}

// Expired token
try {
    user = jwt.validate(my_token_expired);
    console.log('Valid user: ', user);
} catch (err) {
    console.log('Invalid user: ', err);
}

// valid token
try {
    user = jwt.validate(my_token_valid);
    console.log('Id: ', user.id());
    console.log('Name: ', user.name());
    console.log('Email: ', user.email());
    console.log('Allowed actions: ', user.allowedActions());
    console.log('Allowed data: ', user.allowedData());

    console.log('RW access to page SD-P-RG for Center SD001 (true) : ', user.checkAccess('SD001', 'SD-P-RG', 'RW'));
    console.log('RW access to page SD-P-RG for Center SD002 (false): ', user.checkAccess('SD002', 'SD-P-RG', 'RW'));
    console.log('R  access to page SD-P-AB for Center SD001 (true) : ', user.checkAccess('SD001', 'SD-P-AB', 'R'));
    console.log('RW access to page SD-P-AB for Center SD001 (false): ', user.checkAccess('SD001', 'SD-P-AB', 'RW'));
    console.log('R  access to page SD-P-XY for Center SD001 (true) : ', user.checkAccess('SD001', 'SD-P-XY', 'R'));
    console.log('R  access to page SD-P-MN for Center SD001 (false): ', user.checkAccess('SD001', 'SD-P-MN', 'R'));


} catch (err) {
    console.log('Invalid user: ', err);
}

