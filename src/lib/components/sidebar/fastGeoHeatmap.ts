export function getFastGeoHeatmapColor(
	frequency: number,
	maxFrequency: number
): [number, number, number] {
	const safeMaxFrequency = Math.max(1, maxFrequency);
	const intensity = Math.min(1, Math.max(0, frequency / safeMaxFrequency));
	const red = Math.round(255 * intensity);
	const blue = Math.round(255 * (1 - intensity));

	return [red, 80, blue];
}
