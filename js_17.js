// 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)

/*
1 => (51 * 4) + (5 * 1) + (23 * 1) + (21 * 1) => 204 +  5 + 23 + 21 = 253
2 => (51 * 2) + (5 * 3) + (23 * 4) + (21 * 2) => 102 + 15 + 92 + 42 = 251
3 => (51 * 3) + (5 * 4) + (23 * 3) + (21 * 3) => 153 + 20 + 69 + 63 = 305
3 => (51 * 1) + (5 * 2) + (23 * 2) + (21 * 4) =>  51 + 10 + 46 + 84 = 191
*/