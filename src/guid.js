/**
 * @description 生成唯一值uuid
 * @return {String} 返回uuid
 */
const guid = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,  (c) => {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
export default guid;

// guid() // "a1ca0f7b-51bd-4bf3-a5d5-6a74f6adc1c7"