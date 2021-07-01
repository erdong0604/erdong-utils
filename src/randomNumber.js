/**
 * @description 生成任意位数随机数(数字)
 * @param {Number} n 可选长度位数
 * @return {Number} 返回随机值
 */
const randomNumber = (n) => {
	let rnd = '';
	for (let i = 0; i < n; i++) {
		rnd += Math.floor(Math.random() * 10);
	}
	return Number(rnd);
}
export default randomNumber;

// randomNumber(10) // 2908569444


