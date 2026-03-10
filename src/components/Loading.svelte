<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	const quotes = [
		{
			quote:
				'The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.',
			attributedTo: 'Edsger W. Dijkstra'
		},
		{
			quote: "It'll be easy! Five minutes! Multiplied by a constant of course.",
			attributedTo: 'Daniel Saffioti'
		},
		{
			quote:
				'First, there was Pope John. Then, there was Pope Paul. Then, John Paul. Naturally, the next guy should have been Paul John Paul; unfortunately he called himself John Paul II instead and broke the Fibonacci sequence.',
			attributedTo: 'Gary Peterson'
		},
		{
			quote:
				'The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.',
			attributedTo: 'Donald E. Knuth'
		},
		{
			quote:
				"...if you aren't, at any given time, scandalized by code you wrote five or even three years ago, you're not learning anywhere near enough",
			attributedTo: 'Nick Black'
		},
		{
			quote:
				"I don't know how many of you have ever met Dijkstra, but you probably know that arrogance in computer science is measured in nano-Dijkstras.",
			attributedTo: 'Alan Kay'
		},
		{
			quote:
				"What's in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more.",
			attributedTo: 'Alan J. Perlis'
		}
	];

	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	let count = 0;
	let interval: number;

	onMount(() => {
		interval = setInterval(() => {
			count++;
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div>
	<h1>Loading{'.'.repeat((count % 3) + 1)}</h1>
	<blockquote>
		<p>{randomQuote.quote}</p>
	</blockquote>
	<p>–{randomQuote.attributedTo}</p>
</div>
