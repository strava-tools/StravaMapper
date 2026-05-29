import { describe, expect, it } from 'vitest';
import { getFastGeoHeatmapColor } from './fastGeoHeatmap';

describe('getFastGeoHeatmapColor', () => {
	it('returns coldest color at frequency 0', () => {
		expect(getFastGeoHeatmapColor(0, 10)).toEqual([0, 80, 255]);
	});

	it('returns hottest color at max frequency', () => {
		expect(getFastGeoHeatmapColor(10, 10)).toEqual([255, 80, 0]);
	});

	it('handles max frequency of 0 safely', () => {
		expect(getFastGeoHeatmapColor(1, 0)).toEqual([255, 80, 0]);
	});
});
