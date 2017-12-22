// // HTML - bordering
// // Figure out if positional opposing data will be on spreadsheet or that team's defense
// // Adjust rows that have variable number of players to have a height relative to the max allowable

var head_data = ['16','Tuesday, Dec. 19th','Friday, Dec. 15th'];

var ari =[];
var atl =[];
var bal = ['Saturday','4:30 PM ET','BAL','8','6','IND','-13.5','41','27.25','0.242','4','0.307','4','24.6','18.3','6.4','-0.051','20','0.005','18','-0.194','2','-0.182','2','Joe Flacco<br>Jeremy Maclin<br>Mike Wallace (Q)<br>Chris Moore<br>Michael Campanaro<br>Javorius Allen<br>Danny Woodhead<br>Ben Watson','-0.061','25','-0.245','2','0.048','7','0.076','10','Alex Collins<br>Javorius Allen<br>Danny Woodhead<br>Terrance West','0.02','8','-0.13','9','0.0442','7','0.037','5','Jeremy Maclin','0.05','17','0','7.5','8','-0.5','60.2','65.7','-5.5','Mike Wallace (Q)','0.239','24','0','6.6','5.8','0.8','57','45.2','11.8','Chris Moore<br>Michael Campanaro<br>Breshad Perriman','0.212','27','0','6.1','6','0.1','60.4','44','16.4','Ben Watson<br>Nick Boyle<br>Maxx Williams','0.171','29','0','6.6','7.1','-0.5','55','51.8','3.2','Alex Collins<br>Javorius Allen<br>Danny Woodhead<br>Terrance West','0.384','32','0','5.8','7.2','-1.4','44.6','43.8','0.8'];
var buf =[];
var car =[];
var chi =[];
var cin =[];
var cle =[];
var dal =[];
var den =[];
var det =[];
var gbp =[];
var hou =[];
var ind = ['Saturday','4:30 PM ET','IND','3','11','BAL','13.5','41','13.75','-0.284','31','-0.22','28','16.1','26.3','-10.2','-0.216','31','-0.17','28','0.097','27','0.087','25','Jacoby Brissett<br>T.Y. Hilton<br>Chester Rogers<br>Kamar Aiken<br>Donte Moncrief (O)<br>Frank Gore<br>Marlon Mack<br>Jack Doyle<br>Brandon Williams (Q)','-0.204','31','0.29','30','0.105','32','0.046','31','Frank Gore<br>Marlon Mack','-0.137','23','-0.106','14','0.0387','22','0.0416','19','T.Y. Hilton','-0.239','4','0','8.4','8','0.4','73','65.7','7.3','Chester Rogers','-0.483','1','0','7','5.8','1.2','46.3','45.2','1.1','Kamar Aiken<br>Donte Moncrief (O)','-0.123','8','0','5.2','6','-0.8','32.3','44','-11.7','Jack Doyle<br>Brandon Williams (Q)','0.199','31','0','7.9','7.1','0.8','57.4','51.8','5.6','Frank Gore<br>Marlon Mack','-0.164','6','0','7.1','7.2','-0.1','40.2','43.8','-3.6'];
var jac =[];
var kcc =[];
var lac =[];
var lar =[];
var mia =[];
var min =[];
var nep =[];
var nos =[];
var nyg =[];
var nyj =[];
var oak =[];
var phi =[];
var pit =[];
var sff =[];
var sea =[];
var tbb =[];
var ten =[];
var was =[];


var away = ind;
var home = bal;

// Header variable
var week_number = head_data[0];

// Links/Info variables
var date_DVOA_updated = head_data[1];
var date_rosters_updated = head_data[2];

// Game variables
var game_day = away[0];
var game_time = away[1];

var away_team = away[2];

var away_wins = away[3];
var away_losses = away[4];
var away_spread = away[6];
var away_implied_total = away[8];
var away_total_DVOA = away[9];
var away_total_DVOA_rank = away[10];
var away_total_wtd_DVOA = away[11];
var away_total_wtd_DVOA_rank = away[12];

var over_under = away[7];

var home_team = home[2];

var home_wins = home[3];
var home_losses = home[4];
var home_spread = home[6];
var home_implied_total = home[8];
var home_total_DVOA = home[9];
var home_total_DVOA_rank = home[10];
var home_total_wtd_DVOA = home[11];
var home_total_wtd_DVOA_rank = home[12];

// Team Overall variables
var away_PPG_for = away[13];
var away_PPG_vs = away[14];
var away_PPG_diff = away[15];
var away_off_DVOA = away[16];
var away_off_DVOA_rank = away[17];
var away_off_wtd_DVOA = away[18];
var away_off_wtd_DVOA_rank = away[19];
var away_def_DVOA = away[20];
var away_def_DVOA_rank = away[21];
var away_def_wtd_DVOA = away[22];
var away_def_wtd_DVOA_rank = away[23];

var home_PPG_for = home[13];
var home_PPG_vs = home[14];
var home_PPG_diff = home[15];
var home_off_DVOA = home[16];
var home_off_DVOA_rank = home[17];
var home_off_wtd_DVOA = home[18];
var home_off_wtd_DVOA_rank = home[19];
var home_def_DVOA = home[20];
var home_def_DVOA_rank = home[21];
var home_def_wtd_DVOA = home[22];
var home_def_wtd_DVOA_rank = home[23];

// Team Passing Variables
var away_passing_impacted = away[24];
var away_pass_off_DVOA = away[25];
var away_pass_off_DVOA_rank = away[26];
var away_pass_def_DVOA = away[27];
var away_pass_def_DVOA_rank = away[28];
var away_oline_pass_DVOA = away[29];
var away_oline_pass_DVOA_rank = away[30];
var away_dline_pass_DVOA = away[31];
var away_dline_pass_DVOA_rank = away[32];

var home_passing_impacted = home[24];
var home_pass_off_DVOA = home[25];
var home_pass_off_DVOA_rank = home[26];
var home_pass_def_DVOA = home[27];
var home_pass_def_DVOA_rank = home[28];
var home_oline_pass_DVOA = home[29];
var home_oline_pass_DVOA_rank = home[30];
var home_dline_pass_DVOA = home[31];
var home_dline_pass_DVOA_rank = home[32];

// Team Running Variables
var away_running_impacted = away[33];
var away_rush_off_DVOA = away[34];
var away_rush_off_DVOA_rank = away[35];
var away_rush_def_DVOA = away[36];
var away_rush_def_DVOA_rank = away[37];
var away_oline_rush_DVOA = away[38];
var away_oline_rush_DVOA_rank = away[39];
var away_dline_rush_DVOA = away[40];
var away_dline_rush_DVOA_rank = away[41];

var home_running_impacted = home[33];
var home_rush_off_DVOA = home[34];
var home_rush_off_DVOA_rank = home[35];
var home_rush_def_DVOA = home[36];
var home_rush_def_DVOA_rank = home[37];
var home_oline_rush_DVOA = home[38];
var home_oline_rush_DVOA_rank = home[39];
var home_dline_rush_DVOA = home[40];
var home_dline_rush_DVOA_rank = home[41];

// WR1 variables
var away_WR1 = away[42];
var away_WR1_def_DVOA = away[43];
var away_WR1_def_DVOA_rank = away[44];
var away_WR1_def_DVOA_lgavg = away[45];
var away_WR1_targets = away[46];
var away_WR1_targets_lgavg = away[47];
var away_WR1_targets_diff = away[48];
var away_WR1_yards = away[49];
var away_WR1_yards_lgavg = away[50];
var away_WR1_yards_diff = away[51];

var home_WR1 = home[42];
var home_WR1_def_DVOA = home[43];
var home_WR1_def_DVOA_rank = home[44];
var home_WR1_def_DVOA_lgavg = home[45];
var home_WR1_targets = home[46];
var home_WR1_targets_lgavg = home[47];
var home_WR1_targets_diff = home[48];
var home_WR1_yards = home[49];
var home_WR1_yards_lgavg = home[50];
var home_WR1_yards_diff = home[51];

// WR2 variables
var away_WR2 = away[52]
var away_WR2_def_DVOA = away[53]
var away_WR2_def_DVOA_rank = away[54];
var away_WR2_def_DVOA_lgavg = away[55];
var away_WR2_targets = away[56];
var away_WR2_targets_lgavg = away[57];
var away_WR2_targets_diff = away[58];
var away_WR2_yards = away[59];
var away_WR2_yards_lgavg = away[60];
var away_WR2_yards_diff = away[61];

var home_WR2 = home[52];
var home_WR2_def_DVOA = home[53];
var home_WR2_def_DVOA_rank = home[54];
var home_WR2_def_DVOA_lgavg = home[55];
var home_WR2_targets = home[56];
var home_WR2_targets_lgavg = home[57];
var home_WR2_targets_diff = home[58];
var home_WR2_yards = home[59];
var home_WR2_yards_lgavg = home[60];
var home_WR2_yards_diff = home[61];

// WR3 variables
var away_WR3s = away[62];
var away_WR3_def_DVOA = away[63];
var away_WR3_def_DVOA_rank = away[64];
var away_WR3_def_DVOA_lgavg = away[65];
var away_WR3_targets = away[66];
var away_WR3_targets_lgavg = away[67];
var away_WR3_targets_diff = away[68];
var away_WR3_yards = away[69];
var away_WR3_yards_lgavg = away[70];
var away_WR3_yards_diff = away[71];

var home_WR3s = home[62];
var home_WR3_def_DVOA = home[63];
var home_WR3_def_DVOA_rank = home[64];
var home_WR3_def_DVOA_lgavg = home[65];
var home_WR3_targets = home[66];
var home_WR3_targets_lgavg = home[67];
var home_WR3_targets_diff = home[68];
var home_WR3_yards = home[69];
var home_WR3_yards_lgavg = home[70];
var home_WR3_yards_diff = home[71];

// TE variables
var away_TEs = away[72];
var away_TE_def_DVOA = away[73];
var away_TE_def_DVOA_rank = away[74];
var away_TE_def_DVOA_lgavg = away[75];
var away_TE_targets = away[76];
var away_TE_targets_lgavg = away[77];
var away_TE_targets_diff = away[78];
var away_TE_yards = away[79];
var away_TE_yards_lgavg = away[80];
var away_TE_yards_diff = away[81];

var home_TEs = home[72];
var home_TE_def_DVOA = home[73];
var home_TE_def_DVOA_rank = home[74];
var home_TE_def_DVOA_lgavg = home[75];
var home_TE_targets = home[76];
var home_TE_targets_lgavg = home[77];
var home_TE_targets_diff = home[78];
var home_TE_yards = home[79];
var home_TE_yards_lgavg = home[80];
var home_TE_yards_diff = home[81];

// RB variables
var away_RBs = away[82];
var away_RB_def_DVOA = away[83];
var away_RB_def_DVOA_rank = away[84];
var away_RB_def_DVOA_lgavg = away[85];
var away_RB_targets = away[86];
var away_RB_targets_lgavg = away[87];
var away_RB_targets_diff = away[88];
var away_RB_yards = away[89];
var away_RB_yards_lgavg = away[90];
var away_RB_yards_diff = away[91];

var home_RBs = home[82];
var home_RB_def_DVOA = home[83];
var home_RB_def_DVOA_rank = home[84];
var home_RB_def_DVOA_lgavg = home[85];
var home_RB_targets = home[86];
var home_RB_targets_lgavg = home[87];
var home_RB_targets_diff = home[88];
var home_RB_yards = home[89];
var home_RB_yards_lgavg = home[90];
var home_RB_yards_diff = home[91];

// Click Functions
function getMatchup(matchup) {
	if (matchup == "1") {
		var away = ind;
		var home = bal;
	} else if (matchup == "2") {
		var away = min;
		var home = gbp;
	} else if (matchup == "3") {
		var away = tbb;
		var home = car;
	} else if (matchup == "4") {
		var away = cle;
		var home = chi;
	} else if (matchup == "5") {
		var away = det;
		var home = cin;
	} else if (matchup == "6") {
		var away = mia;
		var home = kcc;
	} else if (matchup == "7") {
		var away = buf;
		var home = nep;
	} else if (matchup == "8") {
		var away = atl;
		var home = nos;
	} else if (matchup == "9") {
		var away = lac;
		var home = nyj;
	} else if (matchup == "10") {
		var away = lar;
		var home = ten;
	} else if (matchup == "11") {
		var away = den;
		var home = was;
	} else if (matchup == "12") {
		var away = jac;
		var home = sff;
	} else if (matchup == "13") {
		var away = nyg;
		var home = ari;
	} else if (matchup == "14") {
		var away = sea;
		var home = dal;
	} else if (matchup == "15") {
		var away = pit;
		var home = hou;
	} else if (matchup == "16") {
		var away = oak;
		var home = phi;
	}
	// Game variables
	var game_day = away[0];
	var game_time = away[1];

	var away_team = away[2];

	var away_wins = away[3];
	var away_losses = away[4];
	var away_spread = away[6];
	var away_implied_total = away[8];
	var away_total_DVOA = away[9];
	var away_total_DVOA_rank = away[10];
	var away_total_wtd_DVOA = away[11];
	var away_total_wtd_DVOA_rank = away[12];

	var over_under = away[7];

	var home_team = home[2];

	var home_wins = home[3];
	var home_losses = home[4];
	var home_spread = home[6];
	var home_implied_total = home[8];
	var home_total_DVOA = home[9];
	var home_total_DVOA_rank = home[10];
	var home_total_wtd_DVOA = home[11];
	var home_total_wtd_DVOA_rank = home[12];

	// Team Overall variables
	var away_PPG_for = away[13];
	var away_PPG_vs = away[14];
	var away_PPG_diff = away[15];
	var away_off_DVOA = away[16];
	var away_off_DVOA_rank = away[17];
	var away_off_wtd_DVOA = away[18];
	var away_off_wtd_DVOA_rank = away[19];
	var away_def_DVOA = away[20];
	var away_def_DVOA_rank = away[21];
	var away_def_wtd_DVOA = away[22];
	var away_def_wtd_DVOA_rank = away[23];

	var home_PPG_for = home[13];
	var home_PPG_vs = home[14];
	var home_PPG_diff = home[15];
	var home_off_DVOA = home[16];
	var home_off_DVOA_rank = home[17];
	var home_off_wtd_DVOA = home[18];
	var home_off_wtd_DVOA_rank = home[19];
	var home_def_DVOA = home[20];
	var home_def_DVOA_rank = home[21];
	var home_def_wtd_DVOA = home[22];
	var home_def_wtd_DVOA_rank = home[23];

	// Team Passing Variables
	var away_passing_impacted = away[24];
	var away_pass_off_DVOA = away[25];
	var away_pass_off_DVOA_rank = away[26];
	var away_pass_def_DVOA = away[27];
	var away_pass_def_DVOA_rank = away[28];
	var away_oline_pass_DVOA = away[29];
	var away_oline_pass_DVOA_rank = away[30];
	var away_dline_pass_DVOA = away[31];
	var away_dline_pass_DVOA_rank = away[32];

	var home_passing_impacted = home[24];
	var home_pass_off_DVOA = home[25];
	var home_pass_off_DVOA_rank = home[26];
	var home_pass_def_DVOA = home[27];
	var home_pass_def_DVOA_rank = home[28];
	var home_oline_pass_DVOA = home[29];
	var home_oline_pass_DVOA_rank = home[30];
	var home_dline_pass_DVOA = home[31];
	var home_dline_pass_DVOA_rank = home[32];

	// Team Running Variables
	var away_running_impacted = away[33];
	var away_rush_off_DVOA = away[34];
	var away_rush_off_DVOA_rank = away[35];
	var away_rush_def_DVOA = away[36];
	var away_rush_def_DVOA_rank = away[37];
	var away_oline_rush_DVOA = away[38];
	var away_oline_rush_DVOA_rank = away[39];
	var away_dline_rush_DVOA = away[40];
	var away_dline_rush_DVOA_rank = away[41];

	var home_running_impacted = home[33];
	var home_rush_off_DVOA = home[34];
	var home_rush_off_DVOA_rank = home[35];
	var home_rush_def_DVOA = home[36];
	var home_rush_def_DVOA_rank = home[37];
	var home_oline_rush_DVOA = home[38];
	var home_oline_rush_DVOA_rank = home[39];
	var home_dline_rush_DVOA = home[40];
	var home_dline_rush_DVOA_rank = home[41];

	// WR1 variables
	var away_WR1 = away[42];
	var away_WR1_def_DVOA = away[43];
	var away_WR1_def_DVOA_rank = away[44];
	var away_WR1_def_DVOA_lgavg = away[45];
	var away_WR1_targets = away[46];
	var away_WR1_targets_lgavg = away[47];
	var away_WR1_targets_diff = away[48];
	var away_WR1_yards = away[49];
	var away_WR1_yards_lgavg = away[50];
	var away_WR1_yards_diff = away[51];

	var home_WR1 = home[42];
	var home_WR1_def_DVOA = home[43];
	var home_WR1_def_DVOA_rank = home[44];
	var home_WR1_def_DVOA_lgavg = home[45];
	var home_WR1_targets = home[46];
	var home_WR1_targets_lgavg = home[47];
	var home_WR1_targets_diff = home[48];
	var home_WR1_yards = home[49];
	var home_WR1_yards_lgavg = home[50];
	var home_WR1_yards_diff = home[51];

	// WR2 variables
	var away_WR2 = away[52]
	var away_WR2_def_DVOA = away[53]
	var away_WR2_def_DVOA_rank = away[54];
	var away_WR2_def_DVOA_lgavg = away[55];
	var away_WR2_targets = away[56];
	var away_WR2_targets_lgavg = away[57];
	var away_WR2_targets_diff = away[58];
	var away_WR2_yards = away[59];
	var away_WR2_yards_lgavg = away[60];
	var away_WR2_yards_diff = away[61];

	var home_WR2 = home[52];
	var home_WR2_def_DVOA = home[53];
	var home_WR2_def_DVOA_rank = home[54];
	var home_WR2_def_DVOA_lgavg = home[55];
	var home_WR2_targets = home[56];
	var home_WR2_targets_lgavg = home[57];
	var home_WR2_targets_diff = home[58];
	var home_WR2_yards = home[59];
	var home_WR2_yards_lgavg = home[60];
	var home_WR2_yards_diff = home[61];

	// WR3 variables
	var away_WR3s = away[62];
	var away_WR3_def_DVOA = away[63];
	var away_WR3_def_DVOA_rank = away[64];
	var away_WR3_def_DVOA_lgavg = away[65];
	var away_WR3_targets = away[66];
	var away_WR3_targets_lgavg = away[67];
	var away_WR3_targets_diff = away[68];
	var away_WR3_yards = away[69];
	var away_WR3_yards_lgavg = away[70];
	var away_WR3_yards_diff = away[71];

	var home_WR3s = home[62];
	var home_WR3_def_DVOA = home[63];
	var home_WR3_def_DVOA_rank = home[64];
	var home_WR3_def_DVOA_lgavg = home[65];
	var home_WR3_targets = home[66];
	var home_WR3_targets_lgavg = home[67];
	var home_WR3_targets_diff = home[68];
	var home_WR3_yards = home[69];
	var home_WR3_yards_lgavg = home[70];
	var home_WR3_yards_diff = home[71];

	// TE variables
	var away_TEs = away[72];
	var away_TE_def_DVOA = away[73];
	var away_TE_def_DVOA_rank = away[74];
	var away_TE_def_DVOA_lgavg = away[75];
	var away_TE_targets = away[76];
	var away_TE_targets_lgavg = away[77];
	var away_TE_targets_diff = away[78];
	var away_TE_yards = away[79];
	var away_TE_yards_lgavg = away[80];
	var away_TE_yards_diff = away[81];

	var home_TEs = home[72];
	var home_TE_def_DVOA = home[73];
	var home_TE_def_DVOA_rank = home[74];
	var home_TE_def_DVOA_lgavg = home[75];
	var home_TE_targets = home[76];
	var home_TE_targets_lgavg = home[77];
	var home_TE_targets_diff = home[78];
	var home_TE_yards = home[79];
	var home_TE_yards_lgavg = home[80];
	var home_TE_yards_diff = home[81];

	// RB variables
	var away_RBs = away[82];
	var away_RB_def_DVOA = away[83];
	var away_RB_def_DVOA_rank = away[84];
	var away_RB_def_DVOA_lgavg = away[85];
	var away_RB_targets = away[86];
	var away_RB_targets_lgavg = away[87];
	var away_RB_targets_diff = away[88];
	var away_RB_yards = away[89];
	var away_RB_yards_lgavg = away[90];
	var away_RB_yards_diff = away[91];

	var home_RBs = home[82];
	var home_RB_def_DVOA = home[83];
	var home_RB_def_DVOA_rank = home[84];
	var home_RB_def_DVOA_lgavg = home[85];
	var home_RB_targets = home[86];
	var home_RB_targets_lgavg = home[87];
	var home_RB_targets_diff = home[88];
	var home_RB_yards = home[89];
	var home_RB_yards_lgavg = home[90];
	var home_RB_yards_diff = home[91];
	console.log(away, home);
	console.log(away_WR1, home_WR1);

	document.getElementById('game_day').innerHTML = game_day;
	document.getElementById('game_time').innerHTML = game_time;
	document.getElementById('away_team').innerHTML = away_team;
	document.getElementById('away_team_2').innerHTML = away_team;
	document.getElementById('away_team_3').innerHTML = away_team;
	document.getElementById('away_team_4').innerHTML = away_team;
	document.getElementById('away_team_5').innerHTML = away_team;
	document.getElementById('away_team_6').innerHTML = away_team;
	document.getElementById('away_team_7').innerHTML = away_team;
	document.getElementById('away_team_8').innerHTML = away_team;
	document.getElementById('away_team_9').innerHTML = away_team;
	document.getElementById('away_wins').innerHTML = away_wins;
	document.getElementById('away_losses').innerHTML = away_losses;
	document.getElementById('away_spread').innerHTML = away_spread;
	document.getElementById('away_implied_total').innerHTML = away_implied_total;
	document.getElementById('away_total_DVOA').innerHTML = away_total_DVOA;
	document.getElementById('away_total_DVOA_rank').innerHTML = away_total_DVOA_rank;
	document.getElementById('away_total_wtd_DVOA').innerHTML = away_total_wtd_DVOA;
	document.getElementById('away_total_wtd_DVOA_rank').innerHTML = away_total_wtd_DVOA_rank;
	document.getElementById('over_under').innerHTML = over_under;
	document.getElementById('home_team').innerHTML = home_team;
	document.getElementById('home_team_2').innerHTML = home_team;
	document.getElementById('home_team_3').innerHTML = home_team;
	document.getElementById('home_team_4').innerHTML = home_team;
	document.getElementById('home_team_5').innerHTML = home_team;
	document.getElementById('home_team_6').innerHTML = home_team;
	document.getElementById('home_team_7').innerHTML = home_team;
	document.getElementById('home_team_8').innerHTML = home_team;
	document.getElementById('home_team_9').innerHTML = home_team;
	document.getElementById('home_wins').innerHTML = home_wins;
	document.getElementById('home_losses').innerHTML = home_losses;
	document.getElementById('home_spread').innerHTML = home_spread;
	document.getElementById('home_implied_total').innerHTML = home_implied_total;
	document.getElementById('home_total_DVOA').innerHTML = home_total_DVOA;
	document.getElementById('home_total_DVOA_rank').innerHTML = home_total_DVOA_rank;
	document.getElementById('home_total_wtd_DVOA').innerHTML = home_total_wtd_DVOA;
	document.getElementById('home_total_wtd_DVOA_rank').innerHTML = home_total_wtd_DVOA_rank;
	document.getElementById('away_PPG_for').innerHTML = away_PPG_for;
	document.getElementById('away_PPG_vs').innerHTML = away_PPG_vs;
	document.getElementById('away_PPG_diff').innerHTML = away_PPG_diff;
	document.getElementById('away_off_DVOA').innerHTML = away_off_DVOA;
	document.getElementById('away_off_DVOA_rank').innerHTML = away_off_DVOA_rank;
	document.getElementById('away_off_wtd_DVOA').innerHTML = away_off_wtd_DVOA;
	document.getElementById('away_off_wtd_DVOA_rank').innerHTML = away_off_wtd_DVOA_rank;
	document.getElementById('away_def_DVOA').innerHTML = away_def_DVOA;
	document.getElementById('away_def_DVOA_rank').innerHTML = away_def_DVOA_rank;
	document.getElementById('away_def_wtd_DVOA').innerHTML = away_def_wtd_DVOA;
	document.getElementById('away_def_wtd_DVOA_rank').innerHTML = away_def_wtd_DVOA_rank;
	document.getElementById('home_PPG_for').innerHTML = home_PPG_for;
	document.getElementById('home_PPG_vs').innerHTML = home_PPG_vs;
	document.getElementById('home_PPG_diff').innerHTML = home_PPG_diff;
	document.getElementById('home_off_DVOA').innerHTML = home_off_DVOA;
	document.getElementById('home_off_DVOA_rank').innerHTML = home_off_DVOA_rank;
	document.getElementById('home_off_wtd_DVOA').innerHTML = home_off_wtd_DVOA;
	document.getElementById('home_off_wtd_DVOA_rank').innerHTML = home_off_wtd_DVOA_rank;
	document.getElementById('home_def_DVOA').innerHTML = home_def_DVOA;
	document.getElementById('home_def_DVOA_rank').innerHTML = home_def_DVOA_rank;
	document.getElementById('home_def_wtd_DVOA').innerHTML = home_def_wtd_DVOA;
	document.getElementById('home_def_wtd_DVOA_rank').innerHTML = home_def_wtd_DVOA_rank;
	document.getElementById('away_passing_impacted').innerHTML = away_passing_impacted;
	document.getElementById('away_pass_off_DVOA').innerHTML = away_pass_off_DVOA;
	document.getElementById('away_pass_off_DVOA_rank').innerHTML = away_pass_off_DVOA_rank;
	document.getElementById('away_pass_def_DVOA').innerHTML = away_pass_def_DVOA;
	document.getElementById('away_pass_def_DVOA_rank').innerHTML = away_pass_def_DVOA_rank;
	document.getElementById('away_oline_pass_DVOA').innerHTML = away_oline_pass_DVOA;
	document.getElementById('away_oline_pass_DVOA_rank').innerHTML = away_oline_pass_DVOA_rank;
	document.getElementById('away_dline_pass_DVOA').innerHTML = away_dline_pass_DVOA;
	document.getElementById('away_dline_pass_DVOA_rank').innerHTML = away_dline_pass_DVOA_rank;
	document.getElementById('home_passing_impacted').innerHTML = home_passing_impacted;
	document.getElementById('home_pass_off_DVOA').innerHTML = home_pass_off_DVOA;
	document.getElementById('home_pass_off_DVOA_rank').innerHTML = home_pass_off_DVOA_rank;
	document.getElementById('home_pass_def_DVOA').innerHTML = home_pass_def_DVOA;
	document.getElementById('home_pass_def_DVOA_rank').innerHTML = home_pass_def_DVOA_rank;
	document.getElementById('home_oline_pass_DVOA').innerHTML = home_oline_pass_DVOA;
	document.getElementById('home_oline_pass_DVOA_rank').innerHTML = home_oline_pass_DVOA_rank;
	document.getElementById('home_dline_pass_DVOA').innerHTML = home_dline_pass_DVOA;
	document.getElementById('home_dline_pass_DVOA_rank').innerHTML = home_dline_pass_DVOA_rank;
	document.getElementById('away_running_impacted').innerHTML = away_running_impacted;
	document.getElementById('away_rush_off_DVOA').innerHTML = away_rush_off_DVOA;
	document.getElementById('away_rush_off_DVOA_rank').innerHTML = away_rush_off_DVOA_rank;
	document.getElementById('away_rush_def_DVOA').innerHTML = away_rush_def_DVOA;
	document.getElementById('away_rush_def_DVOA_rank').innerHTML = away_rush_def_DVOA_rank;
	document.getElementById('away_oline_rush_DVOA').innerHTML = away_oline_rush_DVOA;
	document.getElementById('away_oline_rush_DVOA_rank').innerHTML = away_oline_rush_DVOA_rank;
	document.getElementById('away_dline_rush_DVOA').innerHTML = away_dline_rush_DVOA;
	document.getElementById('away_dline_rush_DVOA_rank').innerHTML = away_dline_rush_DVOA_rank;
	document.getElementById('home_running_impacted').innerHTML = home_running_impacted;
	document.getElementById('home_rush_off_DVOA').innerHTML = home_rush_off_DVOA;
	document.getElementById('home_rush_off_DVOA_rank').innerHTML = home_rush_off_DVOA_rank;
	document.getElementById('home_rush_def_DVOA').innerHTML = home_rush_def_DVOA;
	document.getElementById('home_rush_def_DVOA_rank').innerHTML = home_rush_def_DVOA_rank;
	document.getElementById('home_oline_rush_DVOA').innerHTML = home_oline_rush_DVOA;
	document.getElementById('home_oline_rush_DVOA_rank').innerHTML = home_oline_rush_DVOA_rank;
	document.getElementById('home_dline_rush_DVOA').innerHTML = home_dline_rush_DVOA;
	document.getElementById('home_dline_rush_DVOA_rank').innerHTML = home_dline_rush_DVOA_rank;
	document.getElementById('away_WR1').innerHTML = away_WR1;
	document.getElementById('away_WR1_def_DVOA').innerHTML = away_WR1_def_DVOA;
	document.getElementById('away_WR1_def_DVOA_rank').innerHTML = away_WR1_def_DVOA_rank;
	document.getElementById('away_WR1_def_DVOA_lgavg').innerHTML = away_WR1_def_DVOA_lgavg;
	document.getElementById('away_WR1_targets').innerHTML = away_WR1_targets;
	document.getElementById('away_WR1_targets_lgavg').innerHTML = away_WR1_targets_lgavg;
	document.getElementById('away_WR1_targets_diff').innerHTML = away_WR1_targets_diff;
	document.getElementById('away_WR1_yards').innerHTML = away_WR1_yards;
	document.getElementById('away_WR1_yards_lgavg').innerHTML = away_WR1_yards_lgavg;
	document.getElementById('away_WR1_yards_diff').innerHTML = away_WR1_yards_diff;
	document.getElementById('home_WR1').innerHTML = home_WR1;
	document.getElementById('home_WR1_def_DVOA').innerHTML = home_WR1_def_DVOA;
	document.getElementById('home_WR1_def_DVOA_rank').innerHTML = home_WR1_def_DVOA_rank;
	document.getElementById('home_WR1_def_DVOA_lgavg').innerHTML = home_WR1_def_DVOA_lgavg;
	document.getElementById('home_WR1_targets').innerHTML = home_WR1_targets;
	document.getElementById('home_WR1_targets_lgavg').innerHTML = home_WR1_targets_lgavg;
	document.getElementById('home_WR1_targets_diff').innerHTML = home_WR1_targets_diff;
	document.getElementById('home_WR1_yards').innerHTML = home_WR1_yards;
	document.getElementById('home_WR1_yards_lgavg').innerHTML = home_WR1_yards_lgavg;
	document.getElementById('home_WR1_yards_diff').innerHTML = home_WR1_yards_diff;
	document.getElementById('away_WR2').innerHTML = away_WR2;
	document.getElementById('away_WR2_def_DVOA').innerHTML = away_WR2_def_DVOA;
	document.getElementById('away_WR2_def_DVOA_rank').innerHTML = away_WR2_def_DVOA_rank;
	document.getElementById('away_WR2_def_DVOA_lgavg').innerHTML = away_WR2_def_DVOA_lgavg;
	document.getElementById('away_WR2_targets').innerHTML = away_WR2_targets;
	document.getElementById('away_WR2_targets_lgavg').innerHTML = away_WR2_targets_lgavg;
	document.getElementById('away_WR2_targets_diff').innerHTML = away_WR2_targets_diff;
	document.getElementById('away_WR2_yards').innerHTML = away_WR2_yards;
	document.getElementById('away_WR2_yards_lgavg').innerHTML = away_WR2_yards_lgavg;
	document.getElementById('away_WR2_yards_diff').innerHTML = away_WR2_yards_diff;
	document.getElementById('home_WR2').innerHTML = home_WR2;
	document.getElementById('home_WR2_def_DVOA').innerHTML = home_WR2_def_DVOA;
	document.getElementById('home_WR2_def_DVOA_rank').innerHTML = home_WR2_def_DVOA_rank;
	document.getElementById('home_WR2_def_DVOA_lgavg').innerHTML = home_WR2_def_DVOA_lgavg;
	document.getElementById('home_WR2_targets').innerHTML = home_WR2_targets;
	document.getElementById('home_WR2_targets_lgavg').innerHTML = home_WR2_targets_lgavg;
	document.getElementById('home_WR2_targets_diff').innerHTML = home_WR2_targets_diff;
	document.getElementById('home_WR2_yards').innerHTML = home_WR2_yards;
	document.getElementById('home_WR2_yards_lgavg').innerHTML = home_WR2_yards_lgavg;
	document.getElementById('home_WR2_yards_diff').innerHTML = home_WR2_yards_diff;
	document.getElementById('away_WR3s').innerHTML = away_WR3s;
	document.getElementById('away_WR3_def_DVOA').innerHTML = away_WR3_def_DVOA;
	document.getElementById('away_WR3_def_DVOA_rank').innerHTML = away_WR3_def_DVOA_rank;
	document.getElementById('away_WR3_def_DVOA_lgavg').innerHTML = away_WR3_def_DVOA_lgavg;
	document.getElementById('away_WR3_targets').innerHTML = away_WR3_targets;
	document.getElementById('away_WR3_targets_lgavg').innerHTML = away_WR3_targets_lgavg;
	document.getElementById('away_WR3_targets_diff').innerHTML = away_WR3_targets_diff;
	document.getElementById('away_WR3_yards').innerHTML = away_WR3_yards;
	document.getElementById('away_WR3_yards_lgavg').innerHTML = away_WR3_yards_lgavg;
	document.getElementById('away_WR3_yards_diff').innerHTML = away_WR3_yards_diff;
	document.getElementById('home_WR3s').innerHTML = home_WR3s;
	document.getElementById('home_WR3_def_DVOA').innerHTML = home_WR3_def_DVOA;
	document.getElementById('home_WR3_def_DVOA_rank').innerHTML = home_WR3_def_DVOA_rank;
	document.getElementById('home_WR3_def_DVOA_lgavg').innerHTML = home_WR3_def_DVOA_lgavg;
	document.getElementById('home_WR3_targets').innerHTML = home_WR3_targets;
	document.getElementById('home_WR3_targets_lgavg').innerHTML = home_WR3_targets_lgavg;
	document.getElementById('home_WR3_targets_diff').innerHTML = home_WR3_targets_diff;
	document.getElementById('home_WR3_yards').innerHTML = home_WR3_yards;
	document.getElementById('home_WR3_yards_lgavg').innerHTML = home_WR3_yards_lgavg;
	document.getElementById('home_WR3_yards_diff').innerHTML = home_WR3_yards_diff;
	document.getElementById('away_TEs').innerHTML = away_TEs;
	document.getElementById('away_TE_def_DVOA').innerHTML = away_TE_def_DVOA;
	document.getElementById('away_TE_def_DVOA_rank').innerHTML = away_TE_def_DVOA_rank;
	document.getElementById('away_TE_def_DVOA_lgavg').innerHTML = away_TE_def_DVOA_lgavg;
	document.getElementById('away_TE_targets').innerHTML = away_TE_targets;
	document.getElementById('away_TE_targets_lgavg').innerHTML = away_TE_targets_lgavg;
	document.getElementById('away_TE_targets_diff').innerHTML = away_TE_targets_diff;
	document.getElementById('away_TE_yards').innerHTML = away_TE_yards;
	document.getElementById('away_TE_yards_lgavg').innerHTML = away_TE_yards_lgavg;
	document.getElementById('away_TE_yards_diff').innerHTML = away_TE_yards_diff;
	document.getElementById('home_TEs').innerHTML = home_TEs;
	document.getElementById('home_TE_def_DVOA').innerHTML = home_TE_def_DVOA;
	document.getElementById('home_TE_def_DVOA_rank').innerHTML = home_TE_def_DVOA_rank;
	document.getElementById('home_TE_def_DVOA_lgavg').innerHTML = home_TE_def_DVOA_lgavg;
	document.getElementById('home_TE_targets').innerHTML = home_TE_targets;
	document.getElementById('home_TE_targets_lgavg').innerHTML = home_TE_targets_lgavg;
	document.getElementById('home_TE_targets_diff').innerHTML = home_TE_targets_diff;
	document.getElementById('home_TE_yards').innerHTML = home_TE_yards;
	document.getElementById('home_TE_yards_lgavg').innerHTML = home_TE_yards_lgavg;
	document.getElementById('home_TE_yards_diff').innerHTML = home_TE_yards_diff;
	document.getElementById('away_RBs').innerHTML = away_RBs;
	document.getElementById('away_RB_def_DVOA').innerHTML = away_RB_def_DVOA;
	document.getElementById('away_RB_def_DVOA_rank').innerHTML = away_RB_def_DVOA_rank;
	document.getElementById('away_RB_def_DVOA_lgavg').innerHTML = away_RB_def_DVOA_lgavg;
	document.getElementById('away_RB_targets').innerHTML = away_RB_targets;
	document.getElementById('away_RB_targets_lgavg').innerHTML = away_RB_targets_lgavg;
	document.getElementById('away_RB_targets_diff').innerHTML = away_RB_targets_diff;
	document.getElementById('away_RB_yards').innerHTML = away_RB_yards;
	document.getElementById('away_RB_yards_lgavg').innerHTML = away_RB_yards_lgavg;
	document.getElementById('away_RB_yards_diff').innerHTML = away_RB_yards_diff;
	document.getElementById('home_RBs').innerHTML = home_RBs;
	document.getElementById('home_RB_def_DVOA').innerHTML = home_RB_def_DVOA;
	document.getElementById('home_RB_def_DVOA_rank').innerHTML = home_RB_def_DVOA_rank;
	document.getElementById('home_RB_def_DVOA_lgavg').innerHTML = home_RB_def_DVOA_lgavg;
	document.getElementById('home_RB_targets').innerHTML = home_RB_targets;
	document.getElementById('home_RB_targets_lgavg').innerHTML = home_RB_targets_lgavg;
	document.getElementById('home_RB_targets_diff').innerHTML = home_RB_targets_diff;
	document.getElementById('home_RB_yards').innerHTML = home_RB_yards;
	document.getElementById('home_RB_yards_lgavg').innerHTML = home_RB_yards_lgavg;
	document.getElementById('home_RB_yards_diff').innerHTML = home_RB_yards_diff;

	if (away_PPG_for < home_PPG_for) {
		document.getElementById('away_PPG_for').style.backgroundColor = "#d0e0e3";
		document.getElementById('home_PPG_for').style.backgroundColor = "#ead1dc";
		console.log("<");
	} else {
		document.getElementById('away_PPG_for').style.backgroundColor = "#ead1dc";
		document.getElementById('home_PPG_for').style.backgroundColor = "#d0e0e3";
		console.log(">");
	}
	if (away_PPG_vs < home_PPG_vs) {
		document.getElementById('away_PPG_vs').style.backgroundColor = "#d0e0e3";
		document.getElementById('home_PPG_vs').style.backgroundColor = "#ead1dc";
		console.log("<");
	} else {
		document.getElementById('away_PPG_vs').style.backgroundColor = "#ead1dc";
		document.getElementById('home_PPG_vs').style.backgroundColor = "#d0e0e3";
		console.log(">");
	}

	if (away_off_DVOA > home_off_DVOA) {
		document.getElementById('away_off_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_off_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log(">");
	} else {
		document.getElementById('away_off_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_off_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log("<");
	}
	if (away_off_wtd_DVOA < home_off_wtd_DVOA) {
		document.getElementById('away_off_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_off_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log("<");
	} else {
		document.getElementById('away_off_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_off_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log(">");
	}

	if (away_def_DVOA < home_def_DVOA) {
		document.getElementById('away_def_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_def_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log("<");
	} else {
		document.getElementById('away_def_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_def_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log(">");
	}
	if (away_def_wtd_DVOA < home_def_wtd_DVOA) {
		document.getElementById('away_def_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_def_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log("<");
	} else {
		document.getElementById('away_def_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_def_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log(">");
	}

	if (away_pass_off_DVOA > home_pass_off_DVOA) {
		document.getElementById('away_pass_off_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_off_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_pass_off_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_off_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log("<");
	} else {
		document.getElementById('away_pass_off_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_off_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_pass_off_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_off_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log(">");
	}
	if (away_pass_def_DVOA < home_pass_def_DVOA) {
		document.getElementById('away_pass_def_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_def_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_pass_def_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_def_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log("<");
	} else {
		document.getElementById('away_pass_def_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_def_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_pass_def_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_def_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log(">");
	}

	if (away_oline_pass_DVOA > home_oline_pass_DVOA) {
		document.getElementById('away_oline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_oline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_oline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_oline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log("<");
	} else {
		document.getElementById('away_oline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_oline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_oline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_oline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log(">");
	}
	if (away_dline_pass_DVOA > home_dline_pass_DVOA) {
		document.getElementById('away_dline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_dline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_dline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_dline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log(">");
	} else {
		document.getElementById('away_dline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_dline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_dline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_dline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log("<");
	}

	if (away_rush_off_DVOA < home_rush_off_DVOA) {
		document.getElementById('away_rush_off_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_off_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_rush_off_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_off_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log(">");
	} else {
		document.getElementById('away_rush_off_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_off_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_rush_off_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_off_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log("<");
	}
	if (away_rush_def_DVOA > home_rush_def_DVOA) {
		document.getElementById('away_rush_def_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_def_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_rush_def_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_def_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log(">");
	} else {
		document.getElementById('away_rush_def_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_def_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_rush_def_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_def_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log("<");
	}

	if (away_oline_rush_DVOA < home_oline_rush_DVOA) {
		document.getElementById('away_oline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_oline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_oline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_oline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log(">");
	} else {
		document.getElementById('away_oline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_oline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_oline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_oline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log("<");
	}
	if (away_dline_rush_DVOA < home_dline_rush_DVOA) {
		document.getElementById('away_dline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_dline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_dline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_dline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log("<");
	} else {
		document.getElementById('away_dline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_dline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_dline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_dline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log(">");
	}
};

function submit() {
	var awayteam = document.getElementById('awayteam').value;
	var hometeam = document.getElementById('hometeam').value;
	if (awayteam == "ari") {
		var away = ari;
	} else if (awayteam == "atl") {
		var away = atl;
	} else if (awayteam == "bal") {
		var away = bal;
	} else if (awayteam == "buf") {
		var away = buf;
	} else if (awayteam == "car") {
		var away = car;
	} else if (awayteam == "chi") {
		var away = chi;
	} else if (awayteam == "cin") {
		var away = cin;
	} else if (awayteam == "cle") {
		var away = cle;
	} else if (awayteam == "dal") {
		var away = dal;
	} else if (awayteam == "den") {
		var away = den;
	} else if (awayteam == "det") {
		var away = det;
	} else if (awayteam == "gbp") {
		var away = gbp;
	} else if (awayteam == "hou") {
		var away = hou;
	} else if (awayteam == "ind") {
		var away = ind;
	} else if (awayteam == "jac") {
		var away = jac;
	} else if (awayteam == "kcc") {
		var away = kcc;
	} else if (awayteam == "lac") {
		var away = lac;
	} else if (awayteam == "lar") {
		var away = lar;
	} else if (awayteam == "mia") {
		var away = mia;
	} else if (awayteam == "min") {
		var away = min;
	} else if (awayteam == "nep") {
		var away = nep;
	} else if (awayteam == "nos") {
		var away = nos;
	} else if (awayteam == "nyg") {
		var away = nyg;
	} else if (awayteam == "nyj") {
		var away = nyj;
	} else if (awayteam == "oak") {
		var away = oak;
	} else if (awayteam == "phi") {
		var away = phi;
	} else if (awayteam == "pit") {
		var away = pit;
	} else if (awayteam == "sff") {
		var away = sff;
	} else if (awayteam == "sea") {
		var away = sea;
	} else if (awayteam == "tbb") {
		var away = tbb;
	} else if (awayteam == "ten") {
		var away = ten;
	} else if (awayteam == "was") {
		var away = was;
	}
	if (hometeam == "ari") {
		var home = ari;
	} else if (hometeam == "atl") {
		var home = atl;
	} else if (hometeam == "bal") {
		var home = bal;
	} else if (hometeam == "buf") {
		var home = buf;
	} else if (hometeam == "car") {
		var home = car;
	} else if (hometeam == "chi") {
		var home = chi;
	} else if (hometeam == "cin") {
		var home = cin;
	} else if (hometeam == "cle") {
		var home = cle;
	} else if (hometeam == "dal") {
		var home = dal;
	} else if (hometeam == "den") {
		var home = den;
	} else if (hometeam == "det") {
		var home = det;
	} else if (hometeam == "gbp") {
		var home = gbp;
	} else if (hometeam == "hou") {
		var home = hou;
	} else if (hometeam == "ind") {
		var home = ind;
	} else if (hometeam == "jac") {
		var home = jac;
	} else if (hometeam == "kcc") {
		var home = kcc;
	} else if (hometeam == "lac") {
		var home = lac;
	} else if (hometeam == "lar") {
		var home = lar;
	} else if (hometeam == "mia") {
		var home = mia;
	} else if (hometeam == "min") {
		var home = min;
	} else if (hometeam == "nep") {
		var home = nep;
	} else if (hometeam == "nos") {
		var home = nos;
	} else if (hometeam == "nyg") {
		var home = nyg;
	} else if (hometeam == "nyj") {
		var home = nyj;
	} else if (hometeam == "oak") {
		var home = oak;
	} else if (hometeam == "phi") {
		var home = phi;
	} else if (hometeam == "pit") {
		var home = pit;
	} else if (hometeam == "sff") {
		var home = sff;
	} else if (hometeam == "sea") {
		var home = sea;
	} else if (hometeam == "tbb") {
		var home = tbb;
	} else if (hometeam == "ten") {
		var home = ten;
	} else if (hometeam == "was") {
		var home = was;
	}
	// Game variables
	var game_day = away[0];
	var game_time = away[1];

	var away_team = away[2];

	var away_wins = away[3];
	var away_losses = away[4];
	var away_spread = away[6];
	var away_implied_total = away[8];
	var away_total_DVOA = away[9];
	var away_total_DVOA_rank = away[10];
	var away_total_wtd_DVOA = away[11];
	var away_total_wtd_DVOA_rank = away[12];

	var over_under = away[7];

	var home_team = home[2];

	var home_wins = home[3];
	var home_losses = home[4];
	var home_spread = home[6];
	var home_implied_total = home[8];
	var home_total_DVOA = home[9];
	var home_total_DVOA_rank = home[10];
	var home_total_wtd_DVOA = home[11];
	var home_total_wtd_DVOA_rank = home[12];

	// Team Overall variables
	var away_PPG_for = away[13];
	var away_PPG_vs = away[14];
	var away_PPG_diff = away[15];
	var away_off_DVOA = away[16];
	var away_off_DVOA_rank = away[17];
	var away_off_wtd_DVOA = away[18];
	var away_off_wtd_DVOA_rank = away[19];
	var away_def_DVOA = away[20];
	var away_def_DVOA_rank = away[21];
	var away_def_wtd_DVOA = away[22];
	var away_def_wtd_DVOA_rank = away[23];

	var home_PPG_for = home[13];
	var home_PPG_vs = home[14];
	var home_PPG_diff = home[15];
	var home_off_DVOA = home[16];
	var home_off_DVOA_rank = home[17];
	var home_off_wtd_DVOA = home[18];
	var home_off_wtd_DVOA_rank = home[19];
	var home_def_DVOA = home[20];
	var home_def_DVOA_rank = home[21];
	var home_def_wtd_DVOA = home[22];
	var home_def_wtd_DVOA_rank = home[23];

	// Team Passing Variables
	var away_passing_impacted = away[24];
	var away_pass_off_DVOA = away[25];
	var away_pass_off_DVOA_rank = away[26];
	var away_pass_def_DVOA = away[27];
	var away_pass_def_DVOA_rank = away[28];
	var away_oline_pass_DVOA = away[29];
	var away_oline_pass_DVOA_rank = away[30];
	var away_dline_pass_DVOA = away[31];
	var away_dline_pass_DVOA_rank = away[32];

	var home_passing_impacted = home[24];
	var home_pass_off_DVOA = home[25];
	var home_pass_off_DVOA_rank = home[26];
	var home_pass_def_DVOA = home[27];
	var home_pass_def_DVOA_rank = home[28];
	var home_oline_pass_DVOA = home[29];
	var home_oline_pass_DVOA_rank = home[30];
	var home_dline_pass_DVOA = home[31];
	var home_dline_pass_DVOA_rank = home[32];

	// Team Running Variables
	var away_running_impacted = away[33];
	var away_rush_off_DVOA = away[34];
	var away_rush_off_DVOA_rank = away[35];
	var away_rush_def_DVOA = away[36];
	var away_rush_def_DVOA_rank = away[37];
	var away_oline_rush_DVOA = away[38];
	var away_oline_rush_DVOA_rank = away[39];
	var away_dline_rush_DVOA = away[40];
	var away_dline_rush_DVOA_rank = away[41];

	var home_running_impacted = home[33];
	var home_rush_off_DVOA = home[34];
	var home_rush_off_DVOA_rank = home[35];
	var home_rush_def_DVOA = home[36];
	var home_rush_def_DVOA_rank = home[37];
	var home_oline_rush_DVOA = home[38];
	var home_oline_rush_DVOA_rank = home[39];
	var home_dline_rush_DVOA = home[40];
	var home_dline_rush_DVOA_rank = home[41];

	// WR1 variables
	var away_WR1 = away[42];
	var away_WR1_def_DVOA = away[43];
	var away_WR1_def_DVOA_rank = away[44];
	var away_WR1_def_DVOA_lgavg = away[45];
	var away_WR1_targets = away[46];
	var away_WR1_targets_lgavg = away[47];
	var away_WR1_targets_diff = away[48];
	var away_WR1_yards = away[49];
	var away_WR1_yards_lgavg = away[50];
	var away_WR1_yards_diff = away[51];

	var home_WR1 = home[42];
	var home_WR1_def_DVOA = home[43];
	var home_WR1_def_DVOA_rank = home[44];
	var home_WR1_def_DVOA_lgavg = home[45];
	var home_WR1_targets = home[46];
	var home_WR1_targets_lgavg = home[47];
	var home_WR1_targets_diff = home[48];
	var home_WR1_yards = home[49];
	var home_WR1_yards_lgavg = home[50];
	var home_WR1_yards_diff = home[51];

	// WR2 variables
	var away_WR2 = away[52]
	var away_WR2_def_DVOA = away[53]
	var away_WR2_def_DVOA_rank = away[54];
	var away_WR2_def_DVOA_lgavg = away[55];
	var away_WR2_targets = away[56];
	var away_WR2_targets_lgavg = away[57];
	var away_WR2_targets_diff = away[58];
	var away_WR2_yards = away[59];
	var away_WR2_yards_lgavg = away[60];
	var away_WR2_yards_diff = away[61];

	var home_WR2 = home[52];
	var home_WR2_def_DVOA = home[53];
	var home_WR2_def_DVOA_rank = home[54];
	var home_WR2_def_DVOA_lgavg = home[55];
	var home_WR2_targets = home[56];
	var home_WR2_targets_lgavg = home[57];
	var home_WR2_targets_diff = home[58];
	var home_WR2_yards = home[59];
	var home_WR2_yards_lgavg = home[60];
	var home_WR2_yards_diff = home[61];

	// WR3 variables
	var away_WR3s = away[62];
	var away_WR3_def_DVOA = away[63];
	var away_WR3_def_DVOA_rank = away[64];
	var away_WR3_def_DVOA_lgavg = away[65];
	var away_WR3_targets = away[66];
	var away_WR3_targets_lgavg = away[67];
	var away_WR3_targets_diff = away[68];
	var away_WR3_yards = away[69];
	var away_WR3_yards_lgavg = away[70];
	var away_WR3_yards_diff = away[71];

	var home_WR3s = home[62];
	var home_WR3_def_DVOA = home[63];
	var home_WR3_def_DVOA_rank = home[64];
	var home_WR3_def_DVOA_lgavg = home[65];
	var home_WR3_targets = home[66];
	var home_WR3_targets_lgavg = home[67];
	var home_WR3_targets_diff = home[68];
	var home_WR3_yards = home[69];
	var home_WR3_yards_lgavg = home[70];
	var home_WR3_yards_diff = home[71];

	// TE variables
	var away_TEs = away[72];
	var away_TE_def_DVOA = away[73];
	var away_TE_def_DVOA_rank = away[74];
	var away_TE_def_DVOA_lgavg = away[75];
	var away_TE_targets = away[76];
	var away_TE_targets_lgavg = away[77];
	var away_TE_targets_diff = away[78];
	var away_TE_yards = away[79];
	var away_TE_yards_lgavg = away[80];
	var away_TE_yards_diff = away[81];

	var home_TEs = home[72];
	var home_TE_def_DVOA = home[73];
	var home_TE_def_DVOA_rank = home[74];
	var home_TE_def_DVOA_lgavg = home[75];
	var home_TE_targets = home[76];
	var home_TE_targets_lgavg = home[77];
	var home_TE_targets_diff = home[78];
	var home_TE_yards = home[79];
	var home_TE_yards_lgavg = home[80];
	var home_TE_yards_diff = home[81];

	// RB variables
	var away_RBs = away[82];
	var away_RB_def_DVOA = away[83];
	var away_RB_def_DVOA_rank = away[84];
	var away_RB_def_DVOA_lgavg = away[85];
	var away_RB_targets = away[86];
	var away_RB_targets_lgavg = away[87];
	var away_RB_targets_diff = away[88];
	var away_RB_yards = away[89];
	var away_RB_yards_lgavg = away[90];
	var away_RB_yards_diff = away[91];

	var home_RBs = home[82];
	var home_RB_def_DVOA = home[83];
	var home_RB_def_DVOA_rank = home[84];
	var home_RB_def_DVOA_lgavg = home[85];
	var home_RB_targets = home[86];
	var home_RB_targets_lgavg = home[87];
	var home_RB_targets_diff = home[88];
	var home_RB_yards = home[89];
	var home_RB_yards_lgavg = home[90];
	var home_RB_yards_diff = home[91];
	console.log(away, home);
	console.log(away_WR2, home_WR2);

	document.getElementById('game_day').innerHTML = "Custom Matchup";
	document.getElementById('game_time').innerHTML = "";
	document.getElementById('away_team').innerHTML = away_team;
	document.getElementById('away_team_2').innerHTML = away_team;
	document.getElementById('away_team_3').innerHTML = away_team;
	document.getElementById('away_team_4').innerHTML = away_team;
	document.getElementById('away_team_5').innerHTML = away_team;
	document.getElementById('away_team_6').innerHTML = away_team;
	document.getElementById('away_team_7').innerHTML = away_team;
	document.getElementById('away_team_8').innerHTML = away_team;
	document.getElementById('away_team_9').innerHTML = away_team;
	document.getElementById('away_wins').innerHTML = away_wins;
	document.getElementById('away_losses').innerHTML = away_losses;
	document.getElementById('away_spread').innerHTML = "";
	document.getElementById('away_implied_total').innerHTML = "";
	document.getElementById('away_total_DVOA').innerHTML = away_total_DVOA;
	document.getElementById('away_total_DVOA_rank').innerHTML = away_total_DVOA_rank;
	document.getElementById('away_total_wtd_DVOA').innerHTML = away_total_wtd_DVOA;
	document.getElementById('away_total_wtd_DVOA_rank').innerHTML = away_total_wtd_DVOA_rank;
	document.getElementById('over_under').innerHTML = "";
	document.getElementById('home_team').innerHTML = home_team;
	document.getElementById('home_team_2').innerHTML = home_team;
	document.getElementById('home_team_3').innerHTML = home_team;
	document.getElementById('home_team_4').innerHTML = home_team;
	document.getElementById('home_team_5').innerHTML = home_team;
	document.getElementById('home_team_6').innerHTML = home_team;
	document.getElementById('home_team_7').innerHTML = home_team;
	document.getElementById('home_team_8').innerHTML = home_team;
	document.getElementById('home_team_9').innerHTML = home_team;
	document.getElementById('home_wins').innerHTML = home_wins;
	document.getElementById('home_losses').innerHTML = home_losses;
	document.getElementById('home_spread').innerHTML = "";
	document.getElementById('home_implied_total').innerHTML = "";
	document.getElementById('home_total_DVOA').innerHTML = home_total_DVOA;
	document.getElementById('home_total_DVOA_rank').innerHTML = home_total_DVOA_rank;
	document.getElementById('home_total_wtd_DVOA').innerHTML = home_total_wtd_DVOA;
	document.getElementById('home_total_wtd_DVOA_rank').innerHTML = home_total_wtd_DVOA_rank;
	document.getElementById('away_PPG_for').innerHTML = away_PPG_for;
	document.getElementById('away_PPG_vs').innerHTML = away_PPG_vs;
	document.getElementById('away_PPG_diff').innerHTML = away_PPG_diff;
	document.getElementById('away_off_DVOA').innerHTML = away_off_DVOA;
	document.getElementById('away_off_DVOA_rank').innerHTML = away_off_DVOA_rank;
	document.getElementById('away_off_wtd_DVOA').innerHTML = away_off_wtd_DVOA;
	document.getElementById('away_off_wtd_DVOA_rank').innerHTML = away_off_wtd_DVOA_rank;
	document.getElementById('away_def_DVOA').innerHTML = away_def_DVOA;
	document.getElementById('away_def_DVOA_rank').innerHTML = away_def_DVOA_rank;
	document.getElementById('away_def_wtd_DVOA').innerHTML = away_def_wtd_DVOA;
	document.getElementById('away_def_wtd_DVOA_rank').innerHTML = away_def_wtd_DVOA_rank;
	document.getElementById('home_PPG_for').innerHTML = home_PPG_for;
	document.getElementById('home_PPG_vs').innerHTML = home_PPG_vs;
	document.getElementById('home_PPG_diff').innerHTML = home_PPG_diff;
	document.getElementById('home_off_DVOA').innerHTML = home_off_DVOA;
	document.getElementById('home_off_DVOA_rank').innerHTML = home_off_DVOA_rank;
	document.getElementById('home_off_wtd_DVOA').innerHTML = home_off_wtd_DVOA;
	document.getElementById('home_off_wtd_DVOA_rank').innerHTML = home_off_wtd_DVOA_rank;
	document.getElementById('home_def_DVOA').innerHTML = home_def_DVOA;
	document.getElementById('home_def_DVOA_rank').innerHTML = home_def_DVOA_rank;
	document.getElementById('home_def_wtd_DVOA').innerHTML = home_def_wtd_DVOA;
	document.getElementById('home_def_wtd_DVOA_rank').innerHTML = home_def_wtd_DVOA_rank;
	document.getElementById('away_passing_impacted').innerHTML = away_passing_impacted;
	document.getElementById('away_pass_off_DVOA').innerHTML = away_pass_off_DVOA;
	document.getElementById('away_pass_off_DVOA_rank').innerHTML = away_pass_off_DVOA_rank;
	document.getElementById('away_pass_def_DVOA').innerHTML = away_pass_def_DVOA;
	document.getElementById('away_pass_def_DVOA_rank').innerHTML = away_pass_def_DVOA_rank;
	document.getElementById('away_oline_pass_DVOA').innerHTML = away_oline_pass_DVOA;
	document.getElementById('away_oline_pass_DVOA_rank').innerHTML = away_oline_pass_DVOA_rank;
	document.getElementById('away_dline_pass_DVOA').innerHTML = away_dline_pass_DVOA;
	document.getElementById('away_dline_pass_DVOA_rank').innerHTML = away_dline_pass_DVOA_rank;
	document.getElementById('home_passing_impacted').innerHTML = home_passing_impacted;
	document.getElementById('home_pass_off_DVOA').innerHTML = home_pass_off_DVOA;
	document.getElementById('home_pass_off_DVOA_rank').innerHTML = home_pass_off_DVOA_rank;
	document.getElementById('home_pass_def_DVOA').innerHTML = home_pass_def_DVOA;
	document.getElementById('home_pass_def_DVOA_rank').innerHTML = home_pass_def_DVOA_rank;
	document.getElementById('home_oline_pass_DVOA').innerHTML = home_oline_pass_DVOA;
	document.getElementById('home_oline_pass_DVOA_rank').innerHTML = home_oline_pass_DVOA_rank;
	document.getElementById('home_dline_pass_DVOA').innerHTML = home_dline_pass_DVOA;
	document.getElementById('home_dline_pass_DVOA_rank').innerHTML = home_dline_pass_DVOA_rank;
	document.getElementById('away_running_impacted').innerHTML = away_running_impacted;
	document.getElementById('away_rush_off_DVOA').innerHTML = away_rush_off_DVOA;
	document.getElementById('away_rush_off_DVOA_rank').innerHTML = away_rush_off_DVOA_rank;
	document.getElementById('away_rush_def_DVOA').innerHTML = away_rush_def_DVOA;
	document.getElementById('away_rush_def_DVOA_rank').innerHTML = away_rush_def_DVOA_rank;
	document.getElementById('away_oline_rush_DVOA').innerHTML = away_oline_rush_DVOA;
	document.getElementById('away_oline_rush_DVOA_rank').innerHTML = away_oline_rush_DVOA_rank;
	document.getElementById('away_dline_rush_DVOA').innerHTML = away_dline_rush_DVOA;
	document.getElementById('away_dline_rush_DVOA_rank').innerHTML = away_dline_rush_DVOA_rank;
	document.getElementById('home_running_impacted').innerHTML = home_running_impacted;
	document.getElementById('home_rush_off_DVOA').innerHTML = home_rush_off_DVOA;
	document.getElementById('home_rush_off_DVOA_rank').innerHTML = home_rush_off_DVOA_rank;
	document.getElementById('home_rush_def_DVOA').innerHTML = home_rush_def_DVOA;
	document.getElementById('home_rush_def_DVOA_rank').innerHTML = home_rush_def_DVOA_rank;
	document.getElementById('home_oline_rush_DVOA').innerHTML = home_oline_rush_DVOA;
	document.getElementById('home_oline_rush_DVOA_rank').innerHTML = home_oline_rush_DVOA_rank;
	document.getElementById('home_dline_rush_DVOA').innerHTML = home_dline_rush_DVOA;
	document.getElementById('home_dline_rush_DVOA_rank').innerHTML = home_dline_rush_DVOA_rank;
	document.getElementById('away_WR1').innerHTML = away_WR1;
	document.getElementById('away_WR1_def_DVOA').innerHTML = away_WR1_def_DVOA;
	document.getElementById('away_WR1_def_DVOA_rank').innerHTML = away_WR1_def_DVOA_rank;
	document.getElementById('away_WR1_def_DVOA_lgavg').innerHTML = away_WR1_def_DVOA_lgavg;
	document.getElementById('away_WR1_targets').innerHTML = away_WR1_targets;
	document.getElementById('away_WR1_targets_lgavg').innerHTML = away_WR1_targets_lgavg;
	document.getElementById('away_WR1_targets_diff').innerHTML = away_WR1_targets_diff;
	document.getElementById('away_WR1_yards').innerHTML = away_WR1_yards;
	document.getElementById('away_WR1_yards_lgavg').innerHTML = away_WR1_yards_lgavg;
	document.getElementById('away_WR1_yards_diff').innerHTML = away_WR1_yards_diff;
	document.getElementById('home_WR1').innerHTML = home_WR1;
	document.getElementById('home_WR1_def_DVOA').innerHTML = home_WR1_def_DVOA;
	document.getElementById('home_WR1_def_DVOA_rank').innerHTML = home_WR1_def_DVOA_rank;
	document.getElementById('home_WR1_def_DVOA_lgavg').innerHTML = home_WR1_def_DVOA_lgavg;
	document.getElementById('home_WR1_targets').innerHTML = home_WR1_targets;
	document.getElementById('home_WR1_targets_lgavg').innerHTML = home_WR1_targets_lgavg;
	document.getElementById('home_WR1_targets_diff').innerHTML = home_WR1_targets_diff;
	document.getElementById('home_WR1_yards').innerHTML = home_WR1_yards;
	document.getElementById('home_WR1_yards_lgavg').innerHTML = home_WR1_yards_lgavg;
	document.getElementById('home_WR1_yards_diff').innerHTML = home_WR1_yards_diff;
	document.getElementById('away_WR2').innerHTML = away_WR2;
	document.getElementById('away_WR2_def_DVOA').innerHTML = away_WR2_def_DVOA;
	document.getElementById('away_WR2_def_DVOA_rank').innerHTML = away_WR2_def_DVOA_rank;
	document.getElementById('away_WR2_def_DVOA_lgavg').innerHTML = away_WR2_def_DVOA_lgavg;
	document.getElementById('away_WR2_targets').innerHTML = away_WR2_targets;
	document.getElementById('away_WR2_targets_lgavg').innerHTML = away_WR2_targets_lgavg;
	document.getElementById('away_WR2_targets_diff').innerHTML = away_WR2_targets_diff;
	document.getElementById('away_WR2_yards').innerHTML = away_WR2_yards;
	document.getElementById('away_WR2_yards_lgavg').innerHTML = away_WR2_yards_lgavg;
	document.getElementById('away_WR2_yards_diff').innerHTML = away_WR2_yards_diff;
	document.getElementById('home_WR2').innerHTML = home_WR2;
	document.getElementById('home_WR2_def_DVOA').innerHTML = home_WR2_def_DVOA;
	document.getElementById('home_WR2_def_DVOA_rank').innerHTML = home_WR2_def_DVOA_rank;
	document.getElementById('home_WR2_def_DVOA_lgavg').innerHTML = home_WR2_def_DVOA_lgavg;
	document.getElementById('home_WR2_targets').innerHTML = home_WR2_targets;
	document.getElementById('home_WR2_targets_lgavg').innerHTML = home_WR2_targets_lgavg;
	document.getElementById('home_WR2_targets_diff').innerHTML = home_WR2_targets_diff;
	document.getElementById('home_WR2_yards').innerHTML = home_WR2_yards;
	document.getElementById('home_WR2_yards_lgavg').innerHTML = home_WR2_yards_lgavg;
	document.getElementById('home_WR2_yards_diff').innerHTML = home_WR2_yards_diff;
	document.getElementById('away_WR3s').innerHTML = away_WR3s;
	document.getElementById('away_WR3_def_DVOA').innerHTML = away_WR3_def_DVOA;
	document.getElementById('away_WR3_def_DVOA_rank').innerHTML = away_WR3_def_DVOA_rank;
	document.getElementById('away_WR3_def_DVOA_lgavg').innerHTML = away_WR3_def_DVOA_lgavg;
	document.getElementById('away_WR3_targets').innerHTML = away_WR3_targets;
	document.getElementById('away_WR3_targets_lgavg').innerHTML = away_WR3_targets_lgavg;
	document.getElementById('away_WR3_targets_diff').innerHTML = away_WR3_targets_diff;
	document.getElementById('away_WR3_yards').innerHTML = away_WR3_yards;
	document.getElementById('away_WR3_yards_lgavg').innerHTML = away_WR3_yards_lgavg;
	document.getElementById('away_WR3_yards_diff').innerHTML = away_WR3_yards_diff;
	document.getElementById('home_WR3s').innerHTML = home_WR3s;
	document.getElementById('home_WR3_def_DVOA').innerHTML = home_WR3_def_DVOA;
	document.getElementById('home_WR3_def_DVOA_rank').innerHTML = home_WR3_def_DVOA_rank;
	document.getElementById('home_WR3_def_DVOA_lgavg').innerHTML = home_WR3_def_DVOA_lgavg;
	document.getElementById('home_WR3_targets').innerHTML = home_WR3_targets;
	document.getElementById('home_WR3_targets_lgavg').innerHTML = home_WR3_targets_lgavg;
	document.getElementById('home_WR3_targets_diff').innerHTML = home_WR3_targets_diff;
	document.getElementById('home_WR3_yards').innerHTML = home_WR3_yards;
	document.getElementById('home_WR3_yards_lgavg').innerHTML = home_WR3_yards_lgavg;
	document.getElementById('home_WR3_yards_diff').innerHTML = home_WR3_yards_diff;
	document.getElementById('away_TEs').innerHTML = away_TEs;
	document.getElementById('away_TE_def_DVOA').innerHTML = away_TE_def_DVOA;
	document.getElementById('away_TE_def_DVOA_rank').innerHTML = away_TE_def_DVOA_rank;
	document.getElementById('away_TE_def_DVOA_lgavg').innerHTML = away_TE_def_DVOA_lgavg;
	document.getElementById('away_TE_targets').innerHTML = away_TE_targets;
	document.getElementById('away_TE_targets_lgavg').innerHTML = away_TE_targets_lgavg;
	document.getElementById('away_TE_targets_diff').innerHTML = away_TE_targets_diff;
	document.getElementById('away_TE_yards').innerHTML = away_TE_yards;
	document.getElementById('away_TE_yards_lgavg').innerHTML = away_TE_yards_lgavg;
	document.getElementById('away_TE_yards_diff').innerHTML = away_TE_yards_diff;
	document.getElementById('home_TEs').innerHTML = home_TEs;
	document.getElementById('home_TE_def_DVOA').innerHTML = home_TE_def_DVOA;
	document.getElementById('home_TE_def_DVOA_rank').innerHTML = home_TE_def_DVOA_rank;
	document.getElementById('home_TE_def_DVOA_lgavg').innerHTML = home_TE_def_DVOA_lgavg;
	document.getElementById('home_TE_targets').innerHTML = home_TE_targets;
	document.getElementById('home_TE_targets_lgavg').innerHTML = home_TE_targets_lgavg;
	document.getElementById('home_TE_targets_diff').innerHTML = home_TE_targets_diff;
	document.getElementById('home_TE_yards').innerHTML = home_TE_yards;
	document.getElementById('home_TE_yards_lgavg').innerHTML = home_TE_yards_lgavg;
	document.getElementById('home_TE_yards_diff').innerHTML = home_TE_yards_diff;
	document.getElementById('away_RBs').innerHTML = away_RBs;
	document.getElementById('away_RB_def_DVOA').innerHTML = away_RB_def_DVOA;
	document.getElementById('away_RB_def_DVOA_rank').innerHTML = away_RB_def_DVOA_rank;
	document.getElementById('away_RB_def_DVOA_lgavg').innerHTML = away_RB_def_DVOA_lgavg;
	document.getElementById('away_RB_targets').innerHTML = away_RB_targets;
	document.getElementById('away_RB_targets_lgavg').innerHTML = away_RB_targets_lgavg;
	document.getElementById('away_RB_targets_diff').innerHTML = away_RB_targets_diff;
	document.getElementById('away_RB_yards').innerHTML = away_RB_yards;
	document.getElementById('away_RB_yards_lgavg').innerHTML = away_RB_yards_lgavg;
	document.getElementById('away_RB_yards_diff').innerHTML = away_RB_yards_diff;
	document.getElementById('home_RBs').innerHTML = home_RBs;
	document.getElementById('home_RB_def_DVOA').innerHTML = home_RB_def_DVOA;
	document.getElementById('home_RB_def_DVOA_rank').innerHTML = home_RB_def_DVOA_rank;
	document.getElementById('home_RB_def_DVOA_lgavg').innerHTML = home_RB_def_DVOA_lgavg;
	document.getElementById('home_RB_targets').innerHTML = home_RB_targets;
	document.getElementById('home_RB_targets_lgavg').innerHTML = home_RB_targets_lgavg;
	document.getElementById('home_RB_targets_diff').innerHTML = home_RB_targets_diff;
	document.getElementById('home_RB_yards').innerHTML = home_RB_yards;
	document.getElementById('home_RB_yards_lgavg').innerHTML = home_RB_yards_lgavg;
	document.getElementById('home_RB_yards_diff').innerHTML = home_RB_yards_diff;

	if (away_PPG_for < home_PPG_for) {
		document.getElementById('away_PPG_for').style.backgroundColor = "#d0e0e3";
		document.getElementById('home_PPG_for').style.backgroundColor = "#ead1dc";
		console.log("<");
	} else {
		document.getElementById('away_PPG_for').style.backgroundColor = "#ead1dc";
		document.getElementById('home_PPG_for').style.backgroundColor = "#d0e0e3";
		console.log(">");
	}
	if (away_PPG_vs < home_PPG_vs) {
		document.getElementById('away_PPG_vs').style.backgroundColor = "#d0e0e3";
		document.getElementById('home_PPG_vs').style.backgroundColor = "#ead1dc";
		console.log("<");
	} else {
		document.getElementById('away_PPG_vs').style.backgroundColor = "#ead1dc";
		document.getElementById('home_PPG_vs').style.backgroundColor = "#d0e0e3";
		console.log(">");
	}

	if (away_off_DVOA > home_off_DVOA) {
		document.getElementById('away_off_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_off_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log(">");
	} else {
		document.getElementById('away_off_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_off_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log("<");
	}
	if (away_off_wtd_DVOA < home_off_wtd_DVOA) {
		document.getElementById('away_off_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_off_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_off_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log("<");
	} else {
		document.getElementById('away_off_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_off_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_off_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log(">");
	}

	if (away_def_DVOA < home_def_DVOA) {
		document.getElementById('away_def_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_def_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log("<");
	} else {
		document.getElementById('away_def_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_def_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log(">");
	}
	if (away_def_wtd_DVOA < home_def_wtd_DVOA) {
		document.getElementById('away_def_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('away_def_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		document.getElementById('home_def_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		console.log("<");
	} else {
		document.getElementById('away_def_wtd_DVOA').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_wtd_DVOA').style.backgroundColor = "#fff2cc";
		document.getElementById('away_def_wtd_DVOA_rank').style.backgroundColor = "#d9d2e9";
		document.getElementById('home_def_wtd_DVOA_rank').style.backgroundColor = "#fff2cc";
		console.log(">");
	}

	if (away_pass_off_DVOA > home_pass_off_DVOA) {
		document.getElementById('away_pass_off_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_off_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_pass_off_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_off_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log("<");
	} else {
		document.getElementById('away_pass_off_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_off_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_pass_off_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_off_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log(">");
	}
	if (away_pass_def_DVOA < home_pass_def_DVOA) {
		document.getElementById('away_pass_def_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_def_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_pass_def_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_pass_def_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log("<");
	} else {
		document.getElementById('away_pass_def_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_def_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_pass_def_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_pass_def_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log(">");
	}

	if (away_oline_pass_DVOA > home_oline_pass_DVOA) {
		document.getElementById('away_oline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_oline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_oline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_oline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log("<");
	} else {
		document.getElementById('away_oline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_oline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_oline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_oline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log(">");
	}
	if (away_dline_pass_DVOA > home_dline_pass_DVOA) {
		document.getElementById('away_dline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('home_dline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('away_dline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		document.getElementById('home_dline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		console.log(">");
	} else {
		document.getElementById('away_dline_pass_DVOA').style.backgroundColor = "#c9daf8";
		document.getElementById('home_dline_pass_DVOA').style.backgroundColor = "#fce5cd";
		document.getElementById('away_dline_pass_DVOA_rank').style.backgroundColor = "#c9daf8";
		document.getElementById('home_dline_pass_DVOA_rank').style.backgroundColor = "#fce5cd";
		console.log("<");
	}

	if (away_rush_off_DVOA < home_rush_off_DVOA) {
		document.getElementById('away_rush_off_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_off_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_rush_off_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_off_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log(">");
	} else {
		document.getElementById('away_rush_off_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_off_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_rush_off_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_off_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log("<");
	}
	if (away_rush_def_DVOA > home_rush_def_DVOA) {
		document.getElementById('away_rush_def_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_def_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_rush_def_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_rush_def_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log(">");
	} else {
		document.getElementById('away_rush_def_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_def_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_rush_def_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_rush_def_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log("<");
	}

	if (away_oline_rush_DVOA < home_oline_rush_DVOA) {
		document.getElementById('away_oline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_oline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_oline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_oline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log(">");
	} else {
		document.getElementById('away_oline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_oline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_oline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_oline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log("<");
	}
	if (away_dline_rush_DVOA < home_dline_rush_DVOA) {
		document.getElementById('away_dline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('home_dline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('away_dline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		document.getElementById('home_dline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		console.log("<");
	} else {
		document.getElementById('away_dline_rush_DVOA').style.backgroundColor = "#d9ead3";
		document.getElementById('home_dline_rush_DVOA').style.backgroundColor = "#f4cccc";
		document.getElementById('away_dline_rush_DVOA_rank').style.backgroundColor = "#d9ead3";
		document.getElementById('home_dline_rush_DVOA_rank').style.backgroundColor = "#f4cccc";
		console.log(">");
	}
}