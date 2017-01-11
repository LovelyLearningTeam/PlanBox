<template>
	<section id="" class="page">
		<header><router-link :to="{ path: '/user'}" replace class="top_fh"></router-link><h3>添加目标</h3><router-link :to="{ path: '/user'}"  replace class="top_rfont">完成</router-link></header>
		<div class="add_plan">
			<ul>
				<li><div><span>目标名字：</span><input type="text" placeholder="输入目标名字"></div></li>
				<li>
					<div>
						<span>目标周期：</span>
						<select>
							<option value ="volvo">天</option>
							<option value ="saab">周</option>
							<option value="opel">月</option>
							<!-- <option value="audi">年</option> -->
						</select>
					</div>
				</li>
				<li>
					<div>
						<span>目标类型：</span>
						<select>
							<option value ="volvo">个人提升</option>
							<option value ="saab">职业发展</option>
							<option value="opel">健康</option>
							<option value="audi">人脉</option>
						</select>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>