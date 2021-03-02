<script>
	import { onMount } from "svelte";
	import sillyname from "sillyname";
   import 'mini.css/dist/mini-default.min.css';

	let name = ""
	let isPictureLoading = true
	let pictureSrc = ""
	let loadingGifSrc = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"

	const goldenRetrieverImages = [
   "https://images.dog.ceo/breeds/retriever-golden/20200731_180910_200731.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/20200801_174527_200801.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/20200814_113907_200814.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/20200814_163629_200814.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/20200816_163418_200816.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/20200816_180945_200816.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_3963_200731.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4051_200803.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4068_200803.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4193-Edit-Edit_200806.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4365_200807.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4459-Edit_200808.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4500_200808.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4525_200809.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4650_200812.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4904_200816.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/Z6A_4928_200816.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/leo_small.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_10.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1010.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1028.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_109.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1162.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_118.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_124.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1249.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1259.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1324.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_14.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_142.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1442.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1454.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_146.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1580.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1633.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1743.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_176.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_1768.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2029.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2076.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_215.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2295.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2358.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2359.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_238.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2408.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2422.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2440.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2495.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2536.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2663.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2688.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2691.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2796.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_280.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_281.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_286.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2980.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_2994.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3007.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_304.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3073.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_308.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3097.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3111.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3202.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3262.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3327.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3360.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3388.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3414.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_342.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_345.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3494.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3508.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3569.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3666.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3720.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3738.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3853.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_3869.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4005.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4241.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4256.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4312.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_447.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4651.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4678.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_473.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4843.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_4933.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5051.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5132.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5160.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5188.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5240.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5366.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_544.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5452.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5453.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5544.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5642.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5655.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5679.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_569.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5709.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5736.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5764.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5857.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5876.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_5893.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6099.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6105.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6139.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6194.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6233.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6318.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6331.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6338.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6577.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_67.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6726.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6772.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6814.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6820.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6867.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_6980.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_70.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7019.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7037.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_704.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7119.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7123.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7227.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7304.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7312.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7387.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7432.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7437.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7588.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7654.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7706.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7709.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7744.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7771.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7780.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_78.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7803.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7807.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7916.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7930.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_7993.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_8005.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_816.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_8181.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_825.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_831.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_8429.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_846.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_864.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_8764.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_9153.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_9301.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_9504.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/n02099601_9518.jpg",
   "https://images.dog.ceo/breeds/retriever-golden/nina.jpg"
	]

	async function getLinksToAllRetrieverImages() {
		const res = await fetch(`https://dog.ceo/api/breed/retriever/golden/images`)
		const responseBody = await res.json()
		const links = responseBody.message
		return links
	}

	async function getRandomDoggoName() {
		const res = await fetch(`/funny-name-api`, {
			headers: {'content-type': 'application/json'}
		})
		console.log(res)
		const responseBody = await res.text()
		console.log(responseBody)
		// const names = responseBody
		// return names[Math.floor(Math.random() * names.length)]
	}

	async function randomGoldenRetriever() {
		isPictureLoading = true
		name = `${["Mr.", "Dr.", "Mrs.", "Ms."][Math.floor(Math.random() * 4)]} ${sillyname()}`.toUpperCase()
		const goldenRetrievers = await getLinksToAllRetrieverImages()
		isPictureLoading = false
		pictureSrc = goldenRetrieverImages[
			Math.floor(Math.random() * goldenRetrievers.length)
		]
	}

	onMount(async() => await randomGoldenRetriever())
</script>

<main>
   <div class="container">
      {#if !isPictureLoading}
         <div class="row">
            <div class="col-md-2"></div>
            <div class="col-sm-12 col-md-8">
               <h2>{name}</h2>
            </div>
            <div class="col-md-2"></div>
         </div>
         <div class="row">
            <div class="col-md-2"></div>
            <div class="col-sm-12 col-md-8" style="object-fit: contain;">
               <img src={pictureSrc} alt="a random doggo" style="max-height: 500px"/>
            </div>
            <div class="col-md-2"></div>
         </div>
      {:else}
      <div class="row">
         <div class="col-sm-2"></div>
         <div class="col-sm-12 col-md-8">
            <h2>Random doggo name here</h2>
         </div>
         <div class="col-md-2"></div>
      </div>
      <div class="row">
         <div class="col-sm-3"></div>
         <div class="col-md-2">
            <img src={loadingGifSrc} alt="loading animation"/>
         </div>
         <div class="col-md-2"></div>
      </div>
      {/if}
   </div>

</main>

<style global>
   @import "mini.css";
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h2 {
		color: #ff3e00;
      -ms-word-break: break-all;
      word-break: break-all;

      /* Non standard for WebKit */
      word-break: break-word;

      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      hyphens: auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
