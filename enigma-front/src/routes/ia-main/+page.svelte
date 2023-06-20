<script>
	import Chat from "./chat.svelte";
	import Robot from "./robot.svelte";


	let newMessage;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<div class="container">
		<div class="row mt-5">
			<div class="col-4">
				<Robot/>
			</div>
			<div class="col-4">
				
				<button class="btn btn-outline-primary rounded-circle btn-icon">
					<span class="material-icons">mic</span>
				  </button>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-12">
				<Chat />
			</div>
		</div>
	</div>
</section>


