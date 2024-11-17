<script lang="ts">
	import '../app.css';
	import { Navbar, NavBrand } from 'flowbite-svelte'
	let { children } = $props();
</script>

<header class="2xl-container">
    <Navbar class="h-20 shadow-[0px_1px_3px_0px_#0000001A] flex items-center justify-center p-0">
        <NavBrand href="/" class="flex items-center justify-center w-full">
			<img src="/assets/images/logo.png" alt="Logo" />
        </NavBrand>
    </Navbar>
</header>

<main class="pt-[50px] px-[100px]">
	<div class="flex flex-wrap lg:flex-nowrap gap-[40px]">
		<!-- Left Column -->
        <div class="flex-1">
            <div class="flex items-start justify-between mb-[18px]">
               left
            </div>
        </div>
        <div class="w-full lg:w-[521px]">
            <!-- Right column content -->
            <div class="flex flex-col gap-[26px]">
                right
            </div>
        </div>
    </div>
	{@render children()}
</main>

