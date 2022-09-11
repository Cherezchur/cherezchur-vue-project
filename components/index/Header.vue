<template>
	<header class="header">
		<nav class="header__container">
			<Logo />
			<div class="header__right">
				<Social />
				<Like />
			</div>
			<Menu />
		</nav>
	</header>
</template>

<style lang="scss" scoped>
.header {
	&__container {
		display: flex;
		justify-content: space-between;
		padding: 20px;
	}

	&__right {
		display: flex;
		justify-content: space-between;
		width: 33%;
	}
}

</style>>