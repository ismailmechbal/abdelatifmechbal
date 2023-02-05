export const displayPublishDate = (date: string) => {
	const dateOptions: object = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(date).toLocaleDateString("ar-MA",dateOptions)
}
export const isoPublishDate = (date: string) => {
	return new Date(date).toISOString()
}