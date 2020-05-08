export type DateItem = {
	type: "previous" | "current" | "next";
	date: Date;
};

declare function calendarDates<
	T extends {
		firstDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
		matrix?: boolean;
		totalDays?: number;
	}
>(
	date: Date,
	options?: T
): T extends { matrix: true } ? Array<DateItem[]> : DateItem[];

export default calendarDates;
