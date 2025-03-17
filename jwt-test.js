jwt = require ('./jwt-check/jwt-check'); 

my_token_valid = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJURVNUMSIsImVtYWlsIjoiVEVTVDFAc2hhbm11Z2EuY29tIiwibmFtZSI6IlRFU1QxLCBURVNUMSIsImFsbG93ZWQtYWN0aW9ucyI6WyJTRFJHUlciLCJTREFCUiIsIlNEWFlSIl0sImFsbG93ZWQtZGF0YSI6WyJTRDAwMSJdLCJpc3MiOiJodHRwczovL2xhYi5zaGlub3ZhLmluLyIsImlhdCI6MTc0MjIxMTgzMiwiZXhwIjoyMjgyMjExODMyLCJqdGkiOiJmZThkYTljOS03ZjUyLTQ3ZTItOGNiYS1kNjc2OTlhZTBmYjgifQ.RfAqIZxRNJt_ufVon30o_6Nn2r-IvZ-fvFQeNAcwNdURvuBzCPgE-lGdHPLAQoW4CO51ZUgaUZMenCzWt3wH7PSG4cU89xcVfDcyr0jrofw-H9SBoRqbyzFg0zOyt2MjR1IQnVUdIa16TDhVKr2JrNLWosMpgUCcb04iWHa6acZmP4Gflgh2DT_OAh5z2fjsXRT1EgzP4BztiTAJOFtici_JhRVkjN8K4NykiB1bTQ1JvlBsthaT_GY7KrbXDezHrOelQQzsRgOd58JT2hFx2j371UmNJySP2_ygLTualWtblK4YH5QBo_ljk5R1K9O2-CaxhpaOuh2U9zxzm-MWCw';
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
    console.log('Issued at: ', user.issuedAt());
    console.log('Expires at: ', user.expiresAt());
    console.log('Token id: ', user.tokenId());
} catch (err) {
    console.log('Invalid user: ', err);
}

