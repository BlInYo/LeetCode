// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。
// [2,3,4]    6
// 关键：思维转变 从a+b=c ==> c-b=a
function twoSum(nums: number[], target: number): number[] {
	// 返回值 个人习惯
	const result: number[] = []
	// 利用map来存储差
	const map = new Map<number, number>()
	for (let i = 0; i < nums.length; i++) {
		// 如果能够在map里找到差（也就是另一个加数）就返回
		if (map.has(target - nums[i])) {
			result.push(map.get(target - nums[i]) as number, i)
		} else {
			// 如果没有找到就添加 为了便于get，把差值作为key 坐标作为value ，因为要返回的是index数组
			map.set(nums[i], i)
		}
	}
	return result
}
